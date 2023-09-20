import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FilterImg() {
  const [selectedBreed, setSelectedBreed] = useState(''); // State for the selected breed
  const [catImageUrl, setCatImageUrl] = useState(''); // State for the image URL
  const [breeds, setBreeds] = useState([]); // State to store all breeds

  // Function to handle changes in the selected breed
  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  // Function to fetch an image of the selected breed
  const getCatImageByBreed = () => {
    const apiUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${selectedBreed}`;
    
    axios
      .get(apiUrl)
      .then((response) => {
        const imageUrl = response.data[0]?.url || '';
        setCatImageUrl(imageUrl);
      })
      .catch((error) => {
        console.error('Error fetching cat image:', error);
      });
  };

  // Use useEffect to update the image when the selected breed changes
  useEffect(() => {
    // Fetch the list of cat breeds
    axios
      .get('https://api.thecatapi.com/v1/breeds')
      .then((response) => {
        const breedData = response.data;
        setBreeds(breedData);
      })
      .catch((error) => {
        console.error('Error fetching breeds:', error);
      });
  }, []);

  // Render the component
  return (
    <div>
      <h2>Filter Cat Image by Breed</h2>
      <div>
        <label htmlFor="breedSelect">Choose a breed:</label>
        <select
          id="breedSelect"
          value={selectedBreed}
          onChange={handleBreedChange}
        >
          <option value="">All breeds</option>
          {breeds.map((breed, index) => (
            <option key={index} value={breed.id}>
              {breed.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={getCatImageByBreed}>Generate New Cat Image</button>
      <div style={{ maxWidth: '150px', margin: '0 auto' }}>
        {catImageUrl && <img src={catImageUrl} alt="Random Cat" style={{ width: '100%' }} />}
      </div>
    </div>
  );
}

export default FilterImg;
