import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const sets = [
  { id: "base", name: "Base Set" },
  { id: "jungle", name: "Jungle" },
  { id: "fossil", name: "Fossil" }
];

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { dark, setDark } = useContext(ThemeContext); // ✅ Use ThemeContext

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-masterball-main via-masterball-pink to-masterball-dark text-masterball-neutral px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-4xl flex flex-wrap justify-start items-center relative px-6">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="h-[72px] w-[72px]"
          />
          <Link to="/" className=" font-luckiest tracking-widest text-3xl hover:text-yellow-200 transition">
            The Master Set Collectables
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-6 mt-2 sm:mt-0">
          {/* Home Link - COMMENTED OUT */}
          {/* <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link> */}

          {/* Sets Link and Dropdown - COMMENTED OUT */}
          {/* <div className="relative">
            <div className="flex items-center space-x-1 group">
              <Link to="/sets" className="hover:text-yellow-300 transition text-white">
                Sets
              </Link>
              <button onClick={toggleDropdown} className={`p-2 transition-transform duration-200 mt-1 ${isDropdownOpen ? "rotate-180" : ""}`}>
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white group-hover:border-t-yellow-300" />
              </button>
            </div>
            <div className={`absolute left-0 mt-2 flex-col bg-white text-black rounded shadow-lg w-44 z-50 transition-all duration-300 ${isDropdownOpen ? "flex" : "hidden"}`}>
              {sets.map((set) => (
                <Link key={set.id} to={`/set/${set.id}`} className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap" onClick={() => setIsDropdownOpen(false)}>
                  {set.name}
                </Link>
              ))}
            </div>
          </div> */}

          {/* Dark Mode Toggle Button 
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 text-xl font-luckiest tracking-widest bg-masterball-neutral dark:bg-masterball-dark text-masterball-main dark:text-masterball-neutral rounded shadow hover:bg-gray-200 transition"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button> */}
        </div>
      </div>
    </nav>
  );
}


