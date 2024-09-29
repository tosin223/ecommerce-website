import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Heading from "./Heading";

const CartTotal = () => {
  const { currency, deliveryFees, cartAmount } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Heading text1={"CART"} text2={"TOTALS"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {cartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {deliveryFees}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
            <b>Total</b>
            <b>{currency} {cartAmount() === 0 ? 0 : cartAmount() + deliveryFees}.00</b>

        </div>
      </div>
    </div>
  );
};

export default CartTotal;
