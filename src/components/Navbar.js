import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div>
    <div className="nav">
      <h1 className="SiteName">Bookstore CMS</h1>
      <ul>
        <li>
          <NavLink className="liBooks" to="/">BOOKS</NavLink>
        </li>
        <li>
          <NavLink className="liCategories" to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
