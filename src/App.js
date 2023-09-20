import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import RandomImg from './RandomImg';
import FilterImg from './FilterImg';
import './index.css';

function Home() {
  return <h1></h1>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Purrfect cats</h1>
        <Router>
          <div>
            <div className="nav-button-container">
            <Link to="/" className="nav-button pink">
  Home
</Link>
<Link to="/about" className="nav-button purple">
  Random Image
</Link>
<Link to="/filter" className="nav-button blue">
  Filter Image
</Link>

            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<RandomImg />} />
              <Route path="/filter" element={<FilterImg />} />
            </Routes>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;