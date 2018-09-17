const mongoose = require('mongoose'),
     express = require('express'),
     bcrypt = require('bcrypt'),
     Joi = require('joi'),
     _ = require('lodash');

const { User, validate } = require('../models/user')

const app = express();
const router = express.Router()

router.post('/', async (req, res) => {
  const { error } = validate(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  let user = await User.findOne({ email: req.body.email })
  if (user) return res.status(400).send('Invalid email or password')

  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if (!validPassword) return res.status(400).send('Invalid email or password')

  const token = user.generateAuthToken()

  res.send(token)
  console.log(users)
})

const validate = user => {
	const schema = {
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
	};

	return Joi.validate(user, schema);
};

module.exports = router;