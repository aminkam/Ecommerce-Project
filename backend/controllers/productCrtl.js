const Products = require("../models/productModel");

const productCtrl = {
  getProducts: async (req, res) => {
    try {
      const products = await Products.find();
      res.json(products);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  //   prodcutDetail: async (req, res) => {
  //     try {
  //       const product = await Products.findById(req.params.id);
  //       res.send(product);
  //     } catch (error) {
  //       return res.status(500).json({ msg: error.message });
  //     }
  //   },

  //Get Product Details
  getProductDetails: async (req, res, next) => {
    const product = await Products.findById(req.params.id);
    if (!product) {
      return res.status(500).json({
        message: "Product not found",
      });
    }
    res.status(200).json({
      product,
    });
  },

  //Create Product
  createProduct: async (req, res) => {
    try {
      const { product_id, name, image, price, rating, category, Quantity } =
        req.body;

      const product = await Products.findOne({ product_id });
      if (product)
        return res.status(400).json({ msg: "This product already exists." });

      const newProduct = new Products({
        product_id,
        name,
        price,
        image,
        rating,
        category,
        Quantity,
      });

      await newProduct.save();
      res.json({ msg: "created a product" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  //delete product
  deleteProduct: async (req, res, next) => {
    const product = await Products.findById(req.params.id);
    if (!product) {
      return res.status(500).json({
        message: "Product not found",
      });
    }
    await product.remove();
    res.status(200).json({
      message: "Product delete",
    });
  },

  updateProduct: async (req, res) => {
    try {
      const { name, price, rating, category, image } = req.body;

      const product = await Products.findOneAndUpdate(req.params.id, {
        ...req.body,
      });
      res.json({ msg: "Updated a Product", product: product });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getOneProduct: async (req, res) => {
    try {
      let products = await Products.findById(req.params.id);
      res.send(products);
    } catch (error) {
      res.send("get one error");
    }
  },
};

module.exports = productCtrl;
