const Service = require("../models/service");
const ServiceCategory = require("../models/servicecategory");
const router = require("express").Router();
const mongoose = require("mongoose");

router.post("/", (req, res) => {
  const Service = new Service(req.body);
  console.log(Service);
  Service.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      Service: doc,
    });
  });
});

router.get("/id", (req, res) => {
  console.log("/services/id", req.query.id);
  Service.find({ _id: req.query.id }).exec((err, doc) => {
    if (err) return res.status(400).send(err);
    return res.status(200).send(doc);
  });
});

router.get("/", (req, res) => {
  console.log("/services");
  Service.find({})
    .sort([["name", "asc"]])
    .exec((err, services) => {
      if (err) return res.status(400).send(err);
      res.status(200).json(services);
    });
});
router.post("/view", (req, res) => {
  console.log("/services/view");
  let findArgs = {};
  let id = "";
  // findArgs = req.body.filters[0];
  let name = req.body.filters[0].category;
  console.log(name);
  ServiceCategory.find({ name: name }, (err, doc) => {
    if (err) return res.status(400).send(err);
    console.log(doc);
    console.log(doc[0]._id);
    id = doc[0]._id;
    findArgs = { category: id };
    //let limit = req.body.limit ? parseInt(req.body.limit) : 4;
    console.log(findArgs);
    Service.find(findArgs).exec((err, services) => {
      if (err) return res.status(400).send(err);

      res.status(200).json(services);
    });
  });
});
router.get("/name", (req, res) => {
  let id = req.query.id;
  // console.log("/services/name ", req.query.id);
  Service.find({ _id: id }, (err, Service) => {
    if (err) return res.status(400).send(err);
    //console.log(Service);
    res.status(200).send(Service);
  });
});

router.post("/update", (req, res) => {
  console.log(req.query.id, req.body);
  Service.findOneAndUpdate(
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
  Service.deleteOne({ _id: req.query.id }, (err, doc) => {
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
