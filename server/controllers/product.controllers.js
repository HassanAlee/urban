// add product
const addProduct = async () => {
  try {
  } catch (error) {
    return res.status(500).json({ message: "Failed to add product" });
  }
};
module.exports = { addProduct };
