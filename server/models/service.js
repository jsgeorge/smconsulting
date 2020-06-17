const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  name: {
    requried: true,
    type: String,
    unique: 1,
    maxlength: 100,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceCategory",
    required: true,
  },
  description: {
    requried: true,
    type: String,
    unique: 1,
    maxlength: 200,
  },
  longdesc: {
    requried: true,
    type: String,
    maxlength: 400,
  },
  images: {
    type: Array,
    default: [],
  },
});
const service = mongoose.model("Service", serviceSchema);

module.exports = service;
