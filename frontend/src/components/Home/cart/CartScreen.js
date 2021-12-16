import React from "react";
import CartItem from "./CartItem";
import "./CartScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, TableCell, TableHead, TableRow } from "@material-ui/core";
import {
  AddToCart,
  removeFromCart,
} from "../../../redux/Actions/AddToCartAtcion";
import { Link } from "react-router-dom";
//uiiiiiiiiiiiiiiiii

const CartScreen = () => {
  const products = useSelector((state) => state.addCartReducer);
  const dispatch = useDispatch();
  const { cartItems } = products;
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const quantityChangeHandler = (id, qty) => {
    dispatch(AddToCart(id, qty));
  };
  const getCartCount = (id) => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  const getCartTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };

  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>

          <TableHead className="table-title">
            <TableRow>
              <TableCell>Product</TableCell>

              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Subtotal</TableCell>
            </TableRow>
          </TableHead>
          {cartItems.length === 0 ? (
            <div> Your Cart is empty</div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                item={item}
                removeFromCartHandler={removeFromCartHandler}
                quantityChangeHandler={quantityChangeHandler}
              />
            ))
          )}
          {/* </Table>
          </TableContainer> */}
        </div>
        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>
              {" "}
              SubTotal <span className="span-right">{getCartCount()}</span>
            </p>

            <p>
              {" "}
              Tax <span className="span-right">18%</span>
            </p>
            <p id="totale">
              {" "}
              ToTale Price =<span className="span-right">{getCartTotal()}</span>
            </p>
          </div>
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
      <Link to="/">
        <Button variant="outlined" size="medium">
          Go Back
        </Button>
      </Link>
    </>
  );
};

export default CartScreen;
