import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { cartclose } from "../redux/actions";

export const Cart = () => {
  const { cartitems } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleclose = () => {
    dispatch(cartclose());
  };
  return (
    <div className="cart-main">
      <div className="cart-containerbox">
        <button
          style={{ float: "right", margin: "10px" }}
          onClick={handleclose}
        >
          ❌
        </button>
        <div className="cart-card-main">
          {cartitems.map((item, index) => (
            <div className="cart-card">
              <div>
                <img src={item.image} alt={item.title} className="cart-image" />
              </div>
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
