const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  onSale: {
    type: Boolean,
    required: false,
    default: false,
  },
  discountPrice: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  sizes: {
    type: [String],
    required: true,
  },
});
const ProductModel = mongoose.model("product", productSchema);
module.exports = ProductModel;
