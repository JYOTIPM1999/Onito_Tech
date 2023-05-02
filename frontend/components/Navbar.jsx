import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Register Page</Link>
      <Link to="/details">Details Page</Link>
    </div>
  );
};

export default Navbar;
