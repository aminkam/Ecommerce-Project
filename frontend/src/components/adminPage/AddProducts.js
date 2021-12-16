import "./AddProducts.css";
// import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { CreateProduct, GetProduct } from "../../redux/Actions/ProductsActions";
import { Link } from "react-router-dom";

const AddProdcuts = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [product_id, setProduct_id] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const [fileData, setFileData] = useState();

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("image", fileData);

    fetch("http://localhost:5000/single", {
      method: "POST",
      body: data,
    })
      .then((result) => {
        console.log("File Sent Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const add = () => {
    dispatch(
      CreateProduct(product_id, name, price, image, rating, category, Quantity)
    );
    dispatch(GetProduct());
  };

  return (
    <div>
      <div className="body3">
        <div className="wrapper3">
          <div className="title">Create Product</div>
          {/* <form action="#" onSubmit={(e) => e.preventDefault()}>
            <div className="field3">
              <input
                type="text"
                name="Product_id"
                id="Product_id"
                onChange={(e) => setProduct_id(e.target.value)}
                value={product_id}
              />
              <label>Product Name</label>
            </div>
            <div className="field3">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="Name"
                id="Name"
              />
              <label>Product ID</label>
            </div>

            <div className="field3">
              <input
                type="text"
                name="price"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
              <label>Product Price</label>
            </div>
            <div className="img-added">
              <input
                id="modalinput"
                type="text"
                placeholder="nom de l'image.."
                className="form-control"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
              <form onSubmit={onSubmitHandler}>
                <input type="file" onChange={fileChangeHandler} />
              </form>
            </div>
            <div className="field3">
              <input
                type="text"
                name="category"
                id="category"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              />
              <label>Product Category</label>
            </div>
            <div className="field3">
              <input
                type="text"
                name="rating"
                id="rating"
                onChange={(e) => setRating(e.target.value)}
                value={rating}
              />
              <label>Product Rating</label>
            </div>
            <div className="field3">
              <input
                type="text"
                name="Quantity"
                id="Quantity"
                onChange={(e) => setQuantity(e.target.value)}
                value={Quantity}
              />
              <label>Product Quantity</label>
            </div>
            <div className="field3">
              <button onClick={add} type="submit">
                {" "}
                Create{" "}
              </button>
            </div>
          </form> */}
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              id="modalinput"
              placeholder="product_id.."
              type="text"
              className="form-control"
              onChange={(e) => setProduct_id(e.target.value)}
              value={product_id}
            />
            <input
              id="modalinput"
              placeholder="catégorie.."
              type="text"
              className="form-control"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
            <input
              id="modalinput"
              placeholder="nom de l'article.."
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              placeholder="price.."
              id="modalinput"
              type="text"
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <input
              id="modalinput"
              placeholder="rating.."
              type="text"
              className="form-control"
              onChange={(e) => setRating(e.target.value)}
              value={rating}
            />
            <input
              id="modalinput"
              placeholder="quantité.."
              type="text"
              className="form-control"
              onChange={(e) => setQuantity(e.target.value)}
              value={Quantity}
            />
            <input
              id="modalinput"
              type="text"
              placeholder="nom de l'image.."
              className="form-control"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
          </form>
          <form onSubmit={onSubmitHandler}>
            <input type="file" onChange={fileChangeHandler} />
            <br />
            <Link to="/admin">
              <button
                className="btnmodal"
                variant="success"
                type="submit"
                onClick={add}
              >
                Ajouter
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProdcuts;
