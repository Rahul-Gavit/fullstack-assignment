import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <div>
      <div className="bg-black rounded-t-xl text-white py-4 flex justify-between items-center px-8">
        <div className="space-x-2 flex items-center">
          <img src={"/assets/images/abstract.png"} className="h-6" />
          <span>|</span>
          <Link to={"/help"} className="font-medium">
            Help Center
          </Link>
        </div>
        {location.pathname === "/help" && (
          <div>
            <button className="border rounded-md border-gray-300 opacity-70 text-white px-4 py-1">
              Submit a request
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
