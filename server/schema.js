// const mongoose = require('mongoose')
const mongoose = require("mongoose");

const AppSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String
});

const InputSchema = new mongoose.Schema({
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Message = mongoose.model("Message", InputSchema);

module.exports = {
  AppSchema,
  Message
};
