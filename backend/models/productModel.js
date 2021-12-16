const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_id: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },

  image: {
    type: String,
  },
  category: {
    type: String,
  },
  rating: {
    type: Number,
  },
  Quantity: {
    type: Number,
  },
});

module.exports = mongoose.model("Products", productSchema);
