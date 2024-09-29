import React, { useContext, useState } from "react";
import Heading from "../../components/Heading";
import CartTotal from "../../components/CartTotal";
import { stripe_logo, razorpay_logo } from "../../assets";
import { ShopContext } from "../../context/ShopContext";

const Order = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const { placeOrder } = useContext(ShopContext); // Use placeOrder from context

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        {/* Delivery form fields... */}
        <div className="text-xl sm:text-2xl my-3">
          <Heading text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300  py-1.5 px-3.5 w-full rounded"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-300  rounded py-1.5 px-3.5 w-full"
        />
        <input
          type="text"
          placeholder="Street"
          className="border border-gray-300  rounded py-1.5 px-3.5 w-full"
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="State"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300  py-1.5 px-3.5 w-full rounded"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="ZipCode"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-300  py-1.5 px-3.5 w-full rounded"
          />
        </div>
        <input
          type="number"
          placeholder="Phone"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
      </div>

      {/* Right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Heading text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex gap-3 flex-col lg:flex-row">
            {/* Payment method selection... */}
            <div
              onClick={() => setPaymentMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  paymentMethod === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={stripe_logo} alt="stripe" className="h-5 mx-4" />
            </div>
            <div
              onClick={() => setPaymentMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  paymentMethod === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={razorpay_logo} alt="stripe" className="h-5 mx-4" />
            </div>
            <div
              onClick={() => setPaymentMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  paymentMethod === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              onClick={placeOrder} // Call placeOrder when the button is clicked
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
