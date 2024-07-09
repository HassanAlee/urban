const multer = require("multer");
const router = require("express").Router();
const userControllers = require("../controllers/user.controllers.js");
const storage = require("../utils/storage.js");
const upload = multer({ storage });
router.post("/register", upload.single("image"), userControllers.registerUser);
router.post("/login", userControllers.loginUser);
module.exports = router;
