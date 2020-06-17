const mongoose = require("mongoose");

const serviceCategorySchema = mongoose.Schema({
  name: {
    requried: true,
    type: String,
    unique: 1,
    maxlength: 100,
  },
  images: {
    type: Array,
    default: [],
  },
});
const Property = mongoose.model("ServiceCategory", serviceCategorySchema);

module.exports = Property;
