import React from "react";
import "./CartItem.css";
import { Link } from "react-router-dom";
import { DeleteForever } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const CartItem = ({ item, removeFromCartHandler, quantityChangeHandler }) => {
  console.log(item);
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={`/uploads/${item.image}`} alt={item.name} />
      </div>
      <Link to={`/product/${item.product_id}`} className="cartItem__name">
        <p>{item.name}</p>
      </Link>

      <p className="cartitem__price">{item.price}</p>
      <div>
        <select
          className="cartItem__select"
          value={item.qty}
          onChange={(e) => quantityChangeHandler(item.product, e.target.value)}
        >
          {[...Array(item.Quantity).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
      </div>

      <IconButton
        color="secondary"
        size="small"
        edge="start"
        onClick={() => removeFromCartHandler(item.product_id)}
      >
        <DeleteForever className="delete-btn" />
      </IconButton>
    </div>
  );
};

export default CartItem;
