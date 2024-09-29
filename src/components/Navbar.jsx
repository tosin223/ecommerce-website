import React, { useContext, useState } from "react";
import {
  logo,
  profile_icon,
  search_icon,
  cart_icon,
  menu_icon,
  dropdown_icon,
} from "../assets";
import logo3 from "../assets/logo3.png"
import logo2 from "../assets/logo2.png"
import { NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <nav className="flex justify-between items-center py-5 font-medium">
      <NavLink to="/">
        <img src={logo2} alt="logo" className="w-36" />
      </NavLink>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 nav-link ${
              isActive ? "active" : ""
            }`
          }
        >
          <p className="transition-colors duration-300">HOME</p>
          <hr className="w-2/4 border bg-gray-700 h-[1.5px] hidden" />
        </NavLink>

        <NavLink
          to="/collections"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 nav-link ${
              isActive ? "active" : ""
            }`
          }
        >
          <p className="transition-colors duration-300">COLLECTION</p>
          <hr className="w-2/4 border bg-gray-700 h-[1.5px] hidden" />
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 nav-link ${
              isActive ? "active" : ""
            }`
          }
        >
          <p className="transition-colors duration-300">ABOUT</p>
          <hr className="w-2/4 border bg-gray-700 h-[1.5px] hidden" />
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 nav-link ${
              isActive ? "active" : ""
            }`
          }
        >
          <p className="transition-colors duration-300">CONTACT</p>
          <hr className="w-2/4 border bg-gray-700 h-[1.5px] hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={search_icon}
          alt="search"
          className="w-6 cursor-pointer"
        />

        <div className="group relative">
          <NavLink to="/login">
            <img
              src={profile_icon}
              alt="profile icon"
              className="w-5 cursor-pointer"
            />
          </NavLink>

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <NavLink to="/cart" className="relative">
          <img src={cart_icon} alt="cart" className="w-5 min-w-5" />
          <p
            className="absolute right-[-5px] bottom-[-5px] w-4 
          text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]"
          >
            {getCartCount()}
          </p>
        </NavLink>
        <img
          src={menu_icon}
          alt="menu"
          className="w-5 cursor-pointer sm:hidden"
          onClick={() => setShowMenu(true)}
        />
      </div>

      {/* side menu */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          showMenu ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setShowMenu(false)}
            className="flex items-center gap-4 P-3 cursor-pointer"
          >
            <img
              src={dropdown_icon}
              alt="drop down"
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/"
            className="py-2 pl-6 border"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/collections"
            className="py-2 pl-6 border"
          >
            COLLECTIONS
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/about"
            className="py-2 pl-6 border"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/contact"
            className="py-2 pl-6 border"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
