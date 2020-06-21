const EmailList = require("../models/emailist");
const router = require("express").Router();
const mongoose = require("mongoose");

router.post("/", (req, res) => {
  const emailist = new EmailList(req.body);
  emailist.save((err, doc) => {
    if (err) return res.json({ success: false });
    res.status(200).json({
      success: true,
    });
  });
});
module.exports = router;
