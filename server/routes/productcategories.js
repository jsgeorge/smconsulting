const ProductCategory = require("../models/productcategory");
const router = require("express").Router();
const mongoose = require("mongoose");

router.post("/", (req, res) => {
  const productcategory = new ProductCategory(req.body);
  ProductCategory.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      productcategory: doc,
    });
  });
});

router.get("/", (req, res) => {
  ProductCategory.find({})
    .sort([["name", "asc"]])
    .exec((err, categories) => {
      if (err) return res.status(400).send(err);
      res.status(200).json(categories);
    });
});

router.get("/name", (req, res) => {
  let id = req.query.id;
  //console.log("/categories/name ", req.query.id);
  ProductCategory.find({ _id: id }, (err, productcategory) => {
    if (err) return res.status(400).send(err);

    res.status(200).send(productcategory);
  });
});

router.post("/update", (req, res) => {
  ProductCategory.findOneAndUpdate(
    { _id: req.query.id },
    { $set: req.body },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log(err);
        return res.json({ editSuccess: false, err });
      }
      if (!doc) {
        return res.json({ editSuccess: false });
      }
      if (doc) {
        res.status(200).json({
          doc,
          editSuccess: true,
        });
      }
    }
  );
});

module.exports = router;
