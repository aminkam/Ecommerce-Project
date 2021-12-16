import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProduct } from "../../redux/Actions/ProductsActions";
import Footer from "../Home/footer/Footer";
import NavBarrAdmin from "./NavBarrAdmin";
import ProductsAdmin from "./ProductsAdmin";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);
  // const { users, isAdmin } = useSelector((state) => state.loginReducer);
  const [text, setText] = useState("");
  // console.log(products);
  useEffect(() => {
    dispatch(GetProduct());
  }, [dispatch]);
  return (
    <div>
      <NavBarrAdmin text={text} setText={setText} />
      <div>
        <h2 className="homeHeading3"> Products</h2>
        <div className="flex">
          <div className="container3">
            {products
              .filter((product) =>
                product.name.toUpperCase().includes(text.toUpperCase().trim())
              )
              .map((product) => (
                <ProductsAdmin product={product} key={product._id} />
              ))}
          </div>
          <Link to="/AddProducts">
            {" "}
            <BsFillPlusSquareFill className="add-product-btn" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
