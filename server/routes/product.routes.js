const multer = require("multer");
const router = require("express").Router();
const storage = require("../utils/storage");
const upload = multer({ storage });
const verifyToken = require("../utils/verifyToken.js");
const productControllers = require("../controllers/product.controllers.js");
router.post(
  "/add-product",
  verifyToken,
  upload.fields([{ name: "images", maxCount: 10 }]),
  productControllers.addProduct
);
module.exports = router;
