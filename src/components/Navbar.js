import React from 'react';
import { NavLink } from 'react-router-dom';
import './myStyle.css';

const Navbar = () => (
  <div>
    <div className="nav">
      <h1 className="SiteName">Bookstore CMS</h1>
      <ul>
        <li>
          <NavLink to="/">BOOKS</NavLink>
        </li>
        <li>
          <NavLink to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
