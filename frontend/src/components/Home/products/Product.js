import React from "react";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { AddToCart } from "../../../redux/Actions/AddToCartAtcion";
const Product = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba (20,20,20,0.1)",
    activeColor: "tomato",
    value: product.rating,
    size: window.innerWidth < 600 ? 20 : 25,
    isHalf: true,
  };
  const dispatch = useDispatch();
  const [qty, setQty] = useState();
  const { users } = useSelector((state) => state.loginReducer);
  const { products } = useSelector((state) => state.productsReducer);
  const addtoCartHandler = () => {
    dispatch(AddToCart(product._id, qty));
  };
  return (
    <>
      {products ? (
        <div className="productCard">
          <img
            className="product-img"
            src={`/uploads/${product.image}`}
            alt=""
          />
          <p>{product.name}</p>
          <span>{` $ ${product.price}`}</span>
          <div>
            <select
              className="cartItem__select"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            >
              {[...Array(product.Quantity).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {" "}
                  {x + 1}{" "}
                </option>
              ))}
            </select>
          </div>
          <span>{product.category}</span>

          <div classNames="stars">
            <ReactStars {...options} />
          </div>

          {users ? (
            <div className="addtocart-btn">
              <i onClick={addtoCartHandler} class="fa fa-sign-out-alt">
                {" "}
                Add to cart
              </i>
            </div>
          ) : (
            <Link className="nav-link" to="/login">
              <i class="fa fa-sign-in-alt pr-1">Acheter</i>
            </Link>
          )}
        </div>
      ) : (
        // <CircularProgress color="secondary" />
        <></>
      )}
    </>
  );
};

export default Product;
