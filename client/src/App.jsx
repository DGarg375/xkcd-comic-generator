// Dependencies and CSS file imports
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-loading';

// Component imports
import Nav from './components/Nav/Nav.js';
import About from './components/About/About.js';
import Author from './components/Author/Author.js';
import Home from './components/Home/Home.js';
import ComicID from './components/Comic/ComicID.js';
import ComicRandom from './components/Comic/ComicRandom.js';
import ComicLatest from './components/Comic/ComicLatest.js';

function App() {
  return (
    <main>
      <Nav />
      <br></br><br></br><br></br>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} loading />
          <Route path="/about" element={<About />} loading />
          <Route path="/author" element={<Author />} loading />
          <Route path="/comic/random" element={<ComicRandom />} loading />
          <Route path="/comic/id" element={<ComicID />} loading />
          <Route path="/comic/latest" element={<ComicLatest />} loading />
        </Routes>
      </div>
    </main>
  );
}

export default App;
