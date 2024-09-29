import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Heading from "./Heading";
import Card from "./Card";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((product) => product.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Heading text1={"BEST"} text2={"SELLER"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam
          eum, qui delectus nulla iste.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-5 gap-4 gap-y-6">
        {bestSeller.map((product, i) => (
          <Card
            key={i}
            {...product}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
