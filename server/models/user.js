const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SALT_I = 10;
const SECRET_KEY = "SUPERSECRETPASSWORD123";
require("dotenv").config();

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    maxlength: 100,
    unique: 1,
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    require: true,
    minlength: 5,
    unique: 1,
  },
  name: {
    type: String,
    require: true,
    maxlength: 100,
  },
  lastname: {
    type: String,
    require: true,
    maxlength: 100,
  },
  role: {
    type: Number,
    defaut: 0,
  },
  token: {
    type: String,
  },
});

userSchema.pre("save", function (next) {
  var user = this;

  if (user.isModified("password")) {
    bcrypt.genSalt(SALT_I, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  }
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    console.log(candidatePassword, this.password);
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  var user = this;

  const expiresIn = 24 * 60 * 60;

  //var token = jwt.sign(user._id.toHexString(), SECRET_KEY);
  var token = jwt.sign(
    {
      id: user.id,
    },
    SECRET_KEY
  );
  user.token = token;
  // user.save(function(err, user) {
  //   if (err) return cb(err);
  //   cb(null, user);
  // });
  User.update({ _id: user._id }, user, function (
    err,
    numberAffected,
    rawResponse
  ) {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findByToken = function (token, cb) {
  var user = this;

  jwt.verify(token, SECRET_KEY, function (err, decode) {
    console.log(decode);
    // user.findOne({ _id: decode, token: token }, function (err, user) {
    //   if (err) return cb(err);
    //   cb(null, user);
    // });
    if (err) return cb(err);
    cb(decode);
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
