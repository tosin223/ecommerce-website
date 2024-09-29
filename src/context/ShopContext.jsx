import { createContext, useEffect, useState } from "react";
import { products } from "../constant/data";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const deliveryFees = 10;
  const currency = "$";
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [orderItems, setOrderItems] = useState([]);
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select a Product Size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  const placeOrder = () => {
    // Convert cartItems into orderItems
    const orders = [];

    for (const itemId in cartItems) {
      const product = products.find(
        (prod) => String(prod.id) === String(itemId)
      );

      if (product) {
        for (const size in cartItems[itemId]) {
          const quantity = cartItems[itemId][size];

          // Push each item as an order
          orders.push({
            ...product,
            quantity,
            size,
          });
        }
      }
    }

    if (orders.length > 0) {
      setOrderItems(orders); // Update the orderItems state
      setCartItems({}); // Clear cart after placing order
      toast.success("Order placed successfully!");
      navigate("/checkout"); // Navigate to checkout page
    } else {
      toast.error("No items in cart to place order.");
    }
  };

  const updateQuantity = (itemId, size, newQuantity) => {
    let updatedCart = structuredClone(cartItems);

    if (updatedCart[itemId] && updatedCart[itemId][size]) {
      if (newQuantity > 0) {
        updatedCart[itemId][size] = newQuantity;
      } else {
        delete updatedCart[itemId][size];
        if (Object.keys(updatedCart[itemId]).length === 0) {
          delete updatedCart[itemId];
        }
      }
    }

    setCartItems(updatedCart);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const products in cartItems) {
      for (const product in cartItems[products]) {
        try {
          if (cartItems[products][product] > 0) {
            totalCount += cartItems[products][product];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const cartAmount = () => {
    let totalAmount = 0;

    // Iterate through the items in cartItems
    for (const itemId in cartItems) {
      let itemInfo = products.find(
        (product) => String(product.id) === String(itemId)
      );

      if (itemInfo) {
        for (const size in cartItems[itemId]) {
          try {
            if (cartItems[itemId][size] > 0) {
              totalAmount += itemInfo.price * cartItems[itemId][size];
            }
          } catch (error) {
            console.error("Error calculating cart amount:", error);
          }
        }
      } else {
        console.error(`Product with ID ${itemId} not found.`);
      }
    }

    return totalAmount;
  };

  const value = {
    products,
    deliveryFees,
    currency,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    cartAmount,
    orderItems,
    placeOrder,
    navigate,
    updateQuantity,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
