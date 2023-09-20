import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import RandomImg from './RandomImg';
import FilterImg from './FilterImg';
import './index.css'; 

function Home() {
  return <h1>Home</h1>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>purr</h1>
        <Router>
          <div>
            <nav>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Random Image</Link>
              </li>
              <li>
                <Link to="/filter">Filter Image</Link>
              </li>
            </nav>

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