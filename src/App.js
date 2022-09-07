import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './Redux/Categories/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/books" element={<Books />} />
          ;
          <Route path="/categories" element={<Categories />} />
          ;
        </Routes>
      </div>
    </>
  );
}

export default App;
