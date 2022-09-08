import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './components/books';
import Categories from './components/categorie';
import Navbar from './components/navbar';
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
