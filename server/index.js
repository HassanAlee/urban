const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user.routes.js");
const cookieParser = require("cookie-parser");
const productRoutes = require("./routes/product.routes.js");
const path = require("path");
const app = express();
// middlewares
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
// routes
app.use("/user", userRoutes);
app.use("/product", productRoutes);
// app.get("/hi", verifyToken, (req, res) => {
//   res.status(200).send("hehehe");
// });
// db connection
const port = process.env.PORT;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  )
  .catch((error) => console.log(error));
