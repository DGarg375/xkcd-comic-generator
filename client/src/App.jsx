// Dependencies and CSS file imports
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-loading';

// Component imports
import Nav from './components/Nav/Nav.js';
import About from './components/About/About.js';
import Author from './components/Author/Author.js';
import Home from './components/Home/Home.js';
import Comic from './components/Comic/Comic.js';

function App() {
  return (
    <main>
      <Nav />
      {/* New stuff */}
      <br></br><br></br><br></br>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} loading />
          <Route path="/about" element={<About />} loading />
          <Route path="/author" element={<Author />} loading />
          <Route path="/comic/random" element={<Comic />} loading />
          <Route path="/comic/id" element={<Comic />} loading />
          <Route path="/comic/latest" element={<Comic />} loading />
        </Routes>
      </div>
    </main>
  );
}

export default App;
