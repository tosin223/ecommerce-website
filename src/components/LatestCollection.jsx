import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Heading from "./Heading";
import Card from "./Card";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Heading text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam
          eum, qui delectus nulla iste.
        </p>
      </div>
      {/* displaying products */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-5 gap-4 gap-y-6">
        {latestProduct.map((product, i) => (
          <Card key={i} {...product} />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
