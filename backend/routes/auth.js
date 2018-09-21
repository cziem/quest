const mongoose = require('mongoose'),
     express = require('express'),
     bcrypt = require('bcrypt'),
     Joi = require('joi'),
     _ = require('lodash');

const { User } = require('../models/user')
// const auth_mid = require('../middleware/middleware_auth')

// const app = express();
const router = express.Router()

router.post('/', async (req, res) => {
  const { error } = validate(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  let user = await User.findOne({ username: req.body.username })
  if (!user) return res.status(400).send('Invalid username or password')

  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if (!validPassword) return res.status(400).send('Invalid username or password')

  const token = user.generateAuthToken()

  res.json({
    token,
    username: user.username
  })
})

const validate = req => {
	const schema = {
    username: Joi.string()
      .min(5)
      .max(255)
      .required(),
      // .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
	};

	return Joi.validate(req, schema);
};

module.exports = router;