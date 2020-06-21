const mongoose = require("mongoose");

const emailistSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
    maxlength: 100,
    unique: 1,
  },
});
const EmailList = mongoose.model("Role", emailistSchema);

module.exports = EmailList;
