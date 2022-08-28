// Dependencies and CSS file imports
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

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
      <br></br><br></br><br></br>
      {/* New stuff */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/author" element={<Author />} />
          <Route path="/comic/random" element={<Comic />} />
          <Route path="/comic/id" element={<Comic />} />
          <Route path="/comic/latest" element={<Comic />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
