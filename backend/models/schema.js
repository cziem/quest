// const mongoose = require('mongoose')
const mongoose = require("mongoose");

const AppSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: { type: Date, default: Date.now }

  // more to come later
});

const InputSchema = new mongoose.Schema({
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Message = mongoose.model("Message", InputSchema);

const userReg = mongoose.model("Registration", AppSchema);

module.exports = {
  userReg,
  Message
};
