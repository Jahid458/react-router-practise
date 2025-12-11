import React from "react";
import { Link } from "react-router";
import './Header.css'

export const Header = () => {
  return (
    <div>
      <h3>This is Header</h3>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/mobile">Mobile</Link>
        <Link href="/laptop">Laptop</Link>
        <Link href=""></Link>
      </nav>
    </div>
  );
};
