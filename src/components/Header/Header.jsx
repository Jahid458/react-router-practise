import React from "react";
import { Link, NavLink } from "react-router-dom"; 
import "./Header.css";

export const Header = () => {
  return (
    <div>
      <h3>This is Header</h3>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mobiles">Mobile</NavLink>
        <NavLink to="/laptops">Laptop</NavLink>
      </nav>
    </div>
  );
};
