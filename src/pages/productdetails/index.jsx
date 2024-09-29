import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { star_dull_icon, star_icon } from "../../assets";
import RelatedProducts from "../../components/RelatedProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const fetchProductData = () => {
    const product = products.find((product) => product.id === Number(id));
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [id, products]);

  if (!productData) return <div>Loading...</div>;

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* prodduct images */}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((product, i) => (
              <img
                onClick={() => setImage(product)}
                src={product}
                key={i}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt="product images"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="product image" className="w-full h-auto" />
          </div>
        </div>

        {/* product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={star_icon} alt="star" className="w-3 5" />
            <img src={star_icon} alt="star" className="w-3 5" />
            <img src={star_icon} alt="star" className="w-3 5" />
            <img src={star_icon} alt="star" className="w-3 5" />
            <img src={star_dull_icon} alt="star" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency} {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, i) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={i}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData.id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on delivery is available for this product.</p>
            <p>Easy Return and Exchange Policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* description and review comment */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 text-sm text-gray-500">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            culpa quod praesentium possimus nobis sunt nemo. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Voluptatem architecto officia
            veniam facere, fugiat hic voluptates, quidem perspiciatis expedita
            quam, quos sit quis ea harum eius distinctio ipsum ipsa dolorem.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            maxime iste aperiam delectus. Quas, veritatis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ea dolore assumenda et laudantium
            doloremque dolores.
          </p>
        </div>
      </div>
      {/* related products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default ProductDetails;
