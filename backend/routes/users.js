const mongoose = require('mongoose'),
     express = require('express'),
     bcrypt = require('bcrypt'),
     _ = require('lodash');

const { User, validateUser } = require('../models/user')

const app = express();
const router = express.Router()

router.get('/', async (req, res) => {
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