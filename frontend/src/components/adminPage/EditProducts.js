import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-modal";
import "./EditProducts.css";
import { useDispatch } from "react-redux";
import { GetProduct, UpdateProduct } from "../../redux/Actions/ProductsActions";
const EditProducts = ({ product }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState(product.image);
  const [rating, setRating] = useState(product.rating);
  const [category, setCategory] = useState(product.category);
  const dispatch = useDispatch();

  const EditProduct = () => {
    dispatch(UpdateProduct(name, price, rating, category, image));
    dispatch(GetProduct());
    closeModal();
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div id="body4">
      <div className="wrapper4">
        <Button variant="primary" onClick={openModal} id="edit-btn">
          Edit
        </Button>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div id="title4">Edit Product</div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div id="field4">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label>Full Name</label>
            </div>
            <div id="field4">
              <input
                type="text"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
              <label>Price</label>
            </div>
            <div id="field4">
              <input
                type="text"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
              <label>Image</label>
            </div>
            <div id="field4">
              <input
                type="text"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              />
              <label>Category</label>
            </div>
            <div id="field4">
              <input
                type="text"
                onChange={(e) => setRating(e.target.value)}
                value={rating}
              />
              <label>Rating</label>
            </div>

            <dib className="edit-btn">
              <button type="submit" onClick={EditProduct}>
                Edit
              </button>
              <button onClick={closeModal}>close</button>
            </dib>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default EditProducts;
