import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{backgroundColor: "#212121"}} className="p-4 border-b border-gray-800">
      <div className="flex items-center justify-between">
        {/* Heading */}
        <h1 className="text-white text-2xl font-semibold pl-10 mr-auto">
          <Link to="/">Dashboard</Link>
        </h1>

        {/* Navigation Links */}
        <div className="space-x-6 ml-auto">
          <span className="text-white hover:text-gray-300">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;