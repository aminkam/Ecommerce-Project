import ReactStars from "react-rating-stars-component";
import Button from "react-bootstrap/Button";
import "../adminPage/ProductAdmin.css";
import { useDispatch } from "react-redux";
import { DeleteProduct, GetProduct } from "../../redux/Actions/ProductsActions";
import { useEffect } from "react";
import EditProducts from "./EditProducts";

const ProductsAdmin = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba (20,20,20,0.1)",
    activeColor: "tomato",
    value: product.rating,
    size: window.innerWidth < 600 ? 20 : 25,
    isHalf: true,
  };
  const dispatch = useDispatch();
  useEffect(() => {
    GetProduct();
  }, []);
  return (
    <div className="productCard3">
      <img className="product-img3" src={`/uploads/${product.image}`} alt="" />
      <p>{product.name}</p>
      <span>{` $ ${product.price}`}</span>
      <span>{product.category}</span>

      <div classNames="stars3">
        <ReactStars {...options} />
      </div>
      <div id="admin-btn">
        {/* <Link to="/editproduct" product={product}> */}
        {/* <Button className="edit-btn" variant="primary">
            Edit
          </Button> */}
        <EditProducts product={product} />
        {/* </Link> */}
        <Button
          className="delete-btn"
          variant="danger"
          onClick={() => {
            dispatch(DeleteProduct(product._id));
            GetProduct();
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProductsAdmin;
