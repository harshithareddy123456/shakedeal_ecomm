import Products from "./components/Products";
import Product from "./components/Product";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { FaShoppingCart } from "react-icons/fa";
import { Cart } from "./components/cart";
import { useState } from "react";
import { cartopen } from "./redux/actions";

export default function App() {
  const { noofitems_cart, iscartopen } = useSelector((state) => state);
  console.log(iscartopen);
  const dispatch = useDispatch();
  const handleopencart = () => {
    dispatch(cartopen());
  };
  return (
    <div>
      <div className="navheader">
        <div className="navheading">Prod</div>
        <div className="cart-container">
          <FaShoppingCart
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={handleopencart}
          />
          <div className="cart">{noofitems_cart}</div>
        </div>
      </div>
      {iscartopen ? <Cart /> : null}
      <div className="content-container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Products />}></Route>
            <Route path="/:id" element={<Product />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}
