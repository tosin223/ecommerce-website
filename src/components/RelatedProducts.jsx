import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Heading from "./Heading";
import Card from "./Card";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();
      productCopy = productCopy.filter(
        (product) => category === product.category
      );
      productCopy = productCopy.filter(
        (product) => subCategory === product.subCategory
      );
      setRelatedProducts(productCopy.slice(0, 5));
    }
  }, [products]);
  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Heading text1={"RELATED"} text2={"PRODUCT"} />
      </div>
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-col-4 lg:grid-col-5 gap-4">
        {relatedProducts.map((product, i) => (
            <Card key={i} {...product} />
        ))}

       </div>
    </div>
  );
};

export default RelatedProducts;
