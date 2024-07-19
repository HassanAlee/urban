const Product = require("../models/product.model.js");
// add product
const addProduct = async (req, res) => {
  try {
    console.log(req.files.images);
    const imagesArr = req.files.images.map((img) => img.path);
    console.log(imagesArr);
    const product = new Product({ ...req.body, images: imagesArr });
    await product.save();
    return res
      .status(200)
      .json({ message: "Product added successfully", product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed to add product" });
  }
};
module.exports = { addProduct };
