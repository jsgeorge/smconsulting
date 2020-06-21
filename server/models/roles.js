const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
  role: {
    type: String,
    require: true,
    maxlength: 100,
    unique: 1,
  },
  desc: {
    type: String,
    require: true,
    trim: true,
    unique: 1,
  },
});
const User = mongoose.model("Role", roleSchema);

module.exports = Role;
