const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 100,
      requried: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductCategory",
      required: true,
    },
    description: {
      type: String,
    },
    longdesc: {
      type: String,
    },
    images: {
      type: Array,
      default: [],
    },
    createdAt: {
      type: Date,
    },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
