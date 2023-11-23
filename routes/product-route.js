const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

router.post("/add/", productController.addProduct);
router.get("/read/", productController.readProduct);
router.get("/readByProductId/:id", productController.readByProductId);
router.put("/updateByProductId/:id", productController.updateByProductId);
router.delete("/deleteByProductId/:id", productController.deleteByProductId);

module.exports = router;
