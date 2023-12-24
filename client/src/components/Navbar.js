import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
<header className="sticky top-0 bg-yellow-200 shadow-md flex items-center justify-between px-8 py-2">
    <h1 className="w-3/12">
        <Link to="/">
          Library2
        </Link>
    </h1>
    <nav className="text-lg">
        <ul className="flex items-center">
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link to="/login">Login</Link>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link to="/signup">Signup</Link>
            </li>
        </ul>
    </nav>
</header>
  );
}

export default Navbar;
