import HomePage from "../pages/homepage";
import About from "../pages/about";
import Collections from "../pages/collections";
import Contact from "../pages/contact";
import Login from "../pages/login";
import Order from "../pages/order";
import ProductDetails  from "../pages/productdetails";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout"

export const userDatas = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "about",
    component: About,
  },
  {
    path: "cart",
    component: Cart,
  },
  {
    path: "collections",
    component: Collections,
  },
  {
    path: "contact",
    component: Contact,
  },
  {
    path: "login",
    component: Login,
  },
  {
    path: "order",
    component: Order,
  },
  {
    path: "product/:id",
    component: ProductDetails,
  },
  {
    path: "checkout",
    component: Checkout,
  },
];
