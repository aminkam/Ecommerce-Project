const router = require("express").Router();

const productCtrl = require("../controllers/productCrtl");

router
  .route("/products")
  .get(productCtrl.getProducts)
  .post(productCtrl.createProduct);

router
  .route("/products/:id")
  .put(productCtrl.updateProduct)
  .delete(productCtrl.deleteProduct)
  .get(productCtrl.getOneProduct);
// .get(productCtrl.getProductDetails);

module.exports = router;
