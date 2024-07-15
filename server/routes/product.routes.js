const multer = require("multer");
const router = require("express").Router();
const storage = require("../utils/storage");
const upload = multer({ storage });
router.post(
  "/add-product",
  upload.fields([{ name: "images", maxCount: 10 }]),
  (req, res) => {
    console.log(req.files);
    res.status(200).json({ message: "Product added" });
  }
);
module.exports = router;
