const mongoose = require('mongoose'),
     express = require('express'),
     bcrypt = require('bcrypt'),
     _ = require('lodash');

const { User, validateUser } = require('../models/user')

const app = express();
const router = express.Router()

router.get('/', async (req, res) => {
//   const { error } = validateUser(req.body)
//   if (error) return res.status(400).send(error.details[0].message)
  
  const user = await User
    .find()
    .select([
      'name',
      'email',
      'username'
    ])
  res.json(user)
})

module.exports = router;