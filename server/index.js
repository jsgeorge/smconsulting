//server index file
const express = require("express");
const bodyParser = require("body-parser");
//const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary");
const mongoose = require("mongoose");

//Routes
const users = require("./routes/users");
const auth = require("./routes/auth");
const products = require("./routes/products.js");
const productcategories = require("./routes/productcategories.js");
const servicecategories = require("./routes/servicecategories.js");
const services = require("./routes/services.js");
const app = express();
//const async = require("async");

require("dotenv").config();

//Mongooose
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/react/mongodb/smconsulting"
);

//bodypasrer
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("client/build"));

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.use("/products", products);
app.use("/products/add", products);
app.use("/products/article", products);
app.use("/products/articles", products);
app.use("/products/articles_by_id", products);
app.use("/products/view", products);
app.use("/products/update", products);
app.use("/products/delete", products);
app.use("/products/uploadimage", products);
app.use("/products/feature", products);
// //cattegories
app.use("/productcategories", productcategories);
app.use("/productcategories/update", productcategories);
app.use("/productcategories/name", productcategories);

// //servicecategories
app.use("/servicecategories", servicecategories);
app.use("/servicecategories/id", servicecategories);
app.use("/servicecategories/name", servicecategories);
app.use("/servicecategories/update", servicecategories);

// //sercies
app.use("/services", services);
app.use("/services/id", services);
app.use("/services/name", services);
app.use("/services/update", services);
app.use("/services/view", services);

// //users
app.use("/auth", auth);
app.use("/users", users);

//default
if (process.env.NODE_ENV === "production") {
  // const path = require("path");
  // app.get("/*", (req, res) => {
  //   res.sendfile(path.resolve(__dirname, "../client", "build", "index.html"));
  // });
  //Exprees will serve up production assets
  app.use(express.static("client/build"));

  //Express serve up index.html file if it doesn't recognize route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
  app.get("*", function (_, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"), function (
      err
    ) {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
}

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
