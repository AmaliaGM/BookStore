import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categorie';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Books />} />
          ;
          <Route path="/categories" element={<Categories />} />
          ;
        </Routes>
      </div>
    </>
  );
}

export default App;
