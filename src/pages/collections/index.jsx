import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { dropdown_icon } from "../../assets";
import Heading from "../../components/Heading";
import Card from "../../components/Card";

const Collections = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [filterProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]); // Initialized as an array
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) =>
        prev.filter((product) => product !== e.target.value)
      );
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) =>
        prev.filter((product) => product !== e.target.value)
      );
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const filter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        category.includes(product.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }

    setFilteredProducts(productsCopy);
  };

  const sortProduct = () => {
    let filterCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilteredProducts(filterCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilteredProducts(filterCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        filter();
        break;
    }
  };

  useEffect(() => {
    filter();
  }, [category, subCategory,search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter options */}
      <div className="m-w-60">
        <p
          onClick={() => setToggleFilter(!toggleFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTER{" "}
          <img
            src={dropdown_icon}
            alt=""
            className={`h-3 sm:hidden ${toggleFilter ? "rotate-90" : ""}`}
          />
        </p>
        {/* category filter */}
        <div
          className={`border border-gray-300 p-5 py-3 mt-6 ${
            toggleFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>
        {/* Sub category filter */}
        <div
          className={`border border-gray-300 p-5 py-3 my-5 ${
            toggleFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between mb-4 text-base sm:text-2xl">
          <Heading text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low-high</option>
            <option value="high-low">Sort by: High-low</option>
          </select>
        </div>

        {/* map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((product, i) => (
            <Card key={i} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
