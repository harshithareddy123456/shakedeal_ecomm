import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add_to_cart } from "../redux/actions";

const Product = () => {
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const { id } = useParams();
  const fetchproduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    fetchproduct();
  }, [id]);
  const handleaddtocart = (obj) => {
    dispatch(add_to_cart(obj));
  };
  return (
    <div className="prod-main">
      {product && (
        <div className="prod-container">
          <div className="left-product">
            <img
              src={product.image}
              alt={product.title}
              className="prod-image"
            />
          </div>
          <div className="right-product">
            <div style={{ fontSize: "30px" }}>{product.title}</div>
            <div>{product.description}</div>
            <div style={{ fontSize: "20px" }}>{product.price}</div>
            <button
              onClick={() =>
                handleaddtocart({
                  id: product.id,
                  title: product.title,
                  image: product.image,
                })
              }
              className="cart-button"
            >
              add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
