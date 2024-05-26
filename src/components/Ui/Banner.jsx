import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <header className="bg-gray-900 text-gray-200 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div>
          <span className="text-2xl font-bold">Obec Dalovice</span>
        </div>
        <nav className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-500" : "hover:text-gray-500"
            }
          >
            Úvod
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              isActive ? "text-green-500" : "hover:text-gray-500"
            }
          >
            Zprávy
          </NavLink>
          <NavLink
            to="/school"
            className={({ isActive }) =>
              isActive ? "text-green-500" : "hover:text-gray-500"
            }
          >
            Škola
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-green-500" : "hover:text-gray-500"
            }
          >
            Kontakt
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Banner;
