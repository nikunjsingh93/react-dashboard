import React from "react";
import { Link } from "react-router-dom";
import { Settings } from "lucide-react";
const Navbar = () => {
  return (
    <nav
      style={{ backgroundColor: "#212121" }}
      className="p-4 border-b border-gray-800"
    >
      <div className="flex items-center justify-between">
        {/* Heading */}
        <h1 className="text-white text-2xl font-semibold pl-10 mr-auto">
          <Link to="/">Nikunj Singh</Link>
        </h1>

        {/* Navigation Links */}
        <div className="ml-auto">
          <div className="flex text-white hover:text-gray-300 cursor-pointer">
            <div>
              <Link to="/about" className="nav-link">
                Settings{" "}
              </Link>
            </div>
            <div className="pl-2  pt-1">
              <Settings size={18} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
