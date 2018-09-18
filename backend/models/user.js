const mongoose = require('mongoose'),
     Joi = require('joi'),
     jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50
	},
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
		minlength: 5,
		maxlength: 15
	},
	email: {
		type: String,
		required: true,
		unique: true,
		minlength: 5,
		maxlength: 255
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
		maxlength: 1000
	},
	date: { type: Date, default: Date.now }
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);

  return token;
}

const User = mongoose.model('User', userSchema)

const validateUser = (user) => {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    username: Joi.string().alphanum().min(5).max(15).required(),
    password: Joi.string().min(5).max(255).required()
  }

  return Joi.validate(user, schema)
}

// exports.User = User;
// exports.validate = validateUser;


module.exports = {
  User,
  validateUser
}
