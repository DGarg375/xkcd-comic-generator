import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav.js';
import About from './components/About/About.js';
import Author from './components/Author/Author.js';

function App() {
  return (
    <main>
      <Nav />
      <br></br><br></br><br></br>
      {/* New stuff */}
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/author" element={<Author />}/>
        </Routes>
      </div>
    </main>
  );
}

export default App;
