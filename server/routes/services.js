const Service = require("../models/service");
const ServiceCategory = require("../models/servicecategory");
const router = require("express").Router();
const mongoose = require("mongoose");

router.post("/", (req, res) => {
  const Service = new Service(req.body);
  Service.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      Service: doc,
    });
  });
});

router.get("/id", (req, res) => {
  Service.find({ _id: req.query.id }).exec((err, doc) => {
    if (err) return res.status(400).send(err);
    return res.status(200).send(doc);
  });
});

router.get("/", (req, res) => {
  Service.find({})
    .sort([["name", "asc"]])
    .exec((err, services) => {
      if (err) return res.status(400).send(err);
      res.status(200).json(services);
    });
});
router.post("/view", (req, res) => {
  let findArgs = {};
  let id = "";
  // findArgs = req.body.filters[0];
  let name = req.body.filters[0].category;
  ServiceCategory.find({ name: name }, (err, doc) => {
    if (err) return res.status(400).send(err);
    if (doc && doc[0] && doc[0]._id) {
      console.log("doc", doc);

      id = doc[0]._id;
      findArgs = { category: id };
      //let limit = req.body.limit ? parseInt(req.body.limit) : 4;
      Service.find(findArgs).exec((err, services) => {
        if (err) return res.status(400).send(err);

        res.status(200).json(services);
      });
    } else {
      return res.status(400).send("could not ind the selectd category");
    }
  });
});
router.get("/name", (req, res) => {
  let id = req.query.id;
  Service.find({ _id: id }, (err, Service) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(Service);
  });
});

router.post("/update", (req, res) => {
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
        res.status(200).json({
          doc,
          editSuccess: true,
        });
      }
    }
  );
});
router.delete("/", (req, res) => {
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
