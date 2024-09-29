import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import Heading from "../../components/Heading";

const Checkout = () => {
  const { orderItems, currency } = useContext(ShopContext); // Access orderItems and currency from context

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Heading text1={"MY"} text2={"ORDERS"} />
      </div>

      {orderItems.length > 0 ? (
        <div>
          {orderItems.map((product, i) => (
            <div
              key={i}
              className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
            >
              <div className="flex items-start gap-6 text-sm">
                <img
                  src={product.image[0]} // Assuming product images is an array
                  alt={product.name}
                  className="w-16 sm:w-20"
                />
                <div>
                  <p className="text-base font-medium">{product.name}</p>
                  <div className="flex items-center gap-3 mt-2 text-base">
                    <p className="text-lg">
                      {currency} {product.price}
                    </p>
                    <p>Quantity: {product.quantity}</p> 
                    <p>Size: {product.size}</p> 
                  </div>
                  <p className="mt-2">
                    Date:{" "}
                    <span className="text-gray-400">
                      {new Date().toLocaleDateString()} 
                    </span>
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-around">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                  <p className="text-sm md:text-base">Ready to Ship</p>
                </div>
                <button className="border px-4 py-2 text-sm font-medium rounded-sm">
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-8">You have no orders yet.</p>
      )}
    </div>
  );
};

export default Checkout;