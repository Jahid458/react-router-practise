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
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/users2">Users2</NavLink>
      </nav>
    </div>
  );
};
 