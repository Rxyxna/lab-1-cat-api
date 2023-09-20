import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RandomImg() {
  const [catImageUrl, setCatImageUrl] = useState('');

  const getRandomCatImage = () => {
    // URL til API'en for tilfældige kattebilleder
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';

    // Udfør GET-anmodning med Axios
    axios
      .get(apiUrl)
      .then(response => {
        // Hent URL'en for det tilfældige kattebillede
        const imageUrl = response.data[0].url;
        setCatImageUrl(imageUrl);
      })
      .catch(error => {
        console.error('Fejl ved hentning af kattebillede:', error);
      });
  };

  useEffect(() => {
    // Udfør den første anmodning ved montage
    getRandomCatImage();
  }, []);

  return (
    <div>
      <div style={{ maxWidth: '250px', margin: '0 auto', marginBottom: '20px' }}>
        {catImageUrl && (
          <img
            src={catImageUrl}
            alt="Random Cat"
            style={{ width: '100%', border: 'none' }}
          />
        )}
      </div>
      <button className="generate-button" onClick={getRandomCatImage}>
        Generate
      </button>
    </div>
  );
}

export default RandomImg;