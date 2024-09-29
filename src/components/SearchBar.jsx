import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { cross_icon, search_icon } from "../assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

    const [visible, setVisible] = useState(false)
    const location = useLocation()

    useEffect(()=> {
        if (location.pathname.includes('collections')) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }

    },[location])
  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm p-3"
        />
        <img src={search_icon} alt="search icon" className="w-4" />
      </div>
      <img
        src={cross_icon}
        alt="cross icon"
        className="w-3 inline cursor-pointer"
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
};

export default SearchBar;
