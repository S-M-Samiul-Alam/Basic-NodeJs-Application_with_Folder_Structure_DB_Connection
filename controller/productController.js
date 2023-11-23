const Product = require("../model/product-info-model");


// Create a new product
exports.addProduct=async (req, res) => {
    try {
      const { productName, productCategory, productDescription, productQuantity, productPrice } = req.body;
      const newProduct = await Product.create({
        productName,
        productCategory,
        productDescription,
        productQuantity,
        productPrice,
      });
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


// Get all products
exports.readProduct=async (req, res) => {
    try {
      const products = await Product.findAll();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


// Get a specific product by ID
exports.readByProductId=async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await Product.findByPk(productId);
      if (!product) {
        res.status(404).json({ error: 'Product not found' });
      } else {
        res.status(200).json(product);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


// Update a category by ID
exports.updateByProductId=async (req, res) => {
    try {
      const productId = req.params.id;
      const { productName, productCategory, productDescription, productQuantity, productPrice } = req.body;
      const updatedProduct = await Product.findByPk(productId);
      if (!updatedProduct) {
        res.status(404).json({ error: 'Product not found' });
      } else {
        updatedProduct.productName = productName;
        updatedProduct.productCategory = productCategory;
        updatedProduct.productDescription = productDescription;
        updatedProduct.productQuantity = productQuantity;
        updatedProduct.productPrice = productPrice;
        await updatedProduct.save();
        res.status(200).json(updatedProduct);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// Delete a product by ID
exports.deleteByProductId= async (req, res) => {
    try {
      const productId = req.params.id;
      const deletedProduct = await Product.findByPk(productId);
      if (!deletedProduct) {
        res.status(404).json({ error: 'Product not found' });
      } else {
        await deletedProduct.destroy();
        res.status(200).json({ message: 'Product deleted successfully' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };