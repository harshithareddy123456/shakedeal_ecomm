import React, { useEffect, useState } from "react";
import "./product.css";
import { useDispatch, useSelector } from "react-redux";
import { add_to_cart } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartitems } = useSelector((state) => state);
  const fetchdata = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const handleaddtocart = (e, obj) => {
    e.stopPropagation();
    dispatch(add_to_cart(obj));
  };
  const handlenaviagate = (id) => {
    navigate(`/${id}`);
  };
  return (
    <div className="prodcontainer">
      {products &&
        products.map((prod, index) => (
          <div
            key={index}
            className="prodcard"
            onClick={() => handlenaviagate(prod.id)}
          >
            <div>
              <img src={prod.image} alt={prod.title} className="productimage" />
            </div>
            <div>{prod.id}</div>
            <div>{prod.title}</div>
            <div>{prod.price}</div>
            <div>{prod.category}</div>
            <button
              onClick={(e) =>
                handleaddtocart(e, {
                  id: prod.id,
                  title: prod.title,
                  image: prod.image,
                })
              }
              className="cart-button"
            >
              add to cart
            </button>
          </div>
        ))}
    </div>
  );
};

export default Products;
