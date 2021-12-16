import React, { useEffect } from "react";
// import Product from "./Product";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { GetProduct } from "../../../redux/Actions/ProductsActions";

const Products = ({ text }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);
  // const { users, isAdmin } = useSelector((state) => state.loginReducer);
  // const search = useSelector((state) => state.search);
  // console.log("searsh", search);

  useEffect(() => {
    dispatch(GetProduct());
  }, [dispatch]);
  return (
    <div>
      <h2 className="homeHeading"> Products</h2>
      <div className="container" id="container">
        {" "}
        {products
          .filter((product) =>
            product.name.toUpperCase().includes(text.toUpperCase().trim())
          )
          .map((product) => (
            <Product product={product} key={product._id} />
          ))}
      </div>
    </div>
  );
};

export default Products;
