const ServiceCategory = require("../models/servicecategory");
const router = require("express").Router();
const mongoose = require("mongoose");

router.post("/", (req, res) => {
  const ServiceCategory = new ServiceCategory(req.body);
  ServiceCategory.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      ServiceCategory: doc,
    });
  });
});

router.get("/", (req, res) => {
  ServiceCategory.find({})
  .exec((err, servcategories) => {
    if (err) return res.status(400).send(err);
    res.status(200).json(servcategories);
  });
});

router.get("/name", (req, res) => {
  ServiceCategory.find({ _id: req.query.id }).exec((err, doc) => {
    if (err) return res.status(400).send(err);
    return res.status(200).send(doc);
  });
});

router.get("/id", (req, res) => {
  ServiceCategory.find({ name: req.query.name }, (err, doc) => {
    if (err) return res.status(400).send(err);

    res.status(200).send(doc);
  });
});

router.post("/update", (req, res) => {
  console.log(req.query.id, req.body);
  ServiceCategory.findOneAndUpdate(
    { _id: req.query.id },
    { $set: req.body },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log(err);
        return res.json({ editSuccess: false, err });
      }
      if (!doc) {
        console.log("Error document not found");
        return res.json({ editSuccess: false });
      }
      if (doc) {
        console.log(doc);
        res.status(200).json({
          doc,
          editSuccess: true,
        });
      }
    }
  );
});
router.delete("/", (req, res) => {
  console.log(req.query.id);
  ServiceCategory.deleteOne({ _id: req.query.id }, (err, doc) => {
    if (err) {
      console.log(err);
      return res.json({ editSuccess: false, err });
    }
    res.status(200).json({
      doc,
      editSuccess: true,
    });
  });
});

module.exports = router;
