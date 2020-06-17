const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    requried: true,
    type: String,
    unique: 1,
    maxlength: 100,
  },
});
const ProductCategory = mongoose.model("ProductCategory", categorySchema);

module.exports = ProductCategory;
