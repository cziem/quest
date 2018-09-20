const mongoose = require('mongoose'),
     express = require('express'),
     bcrypt = require('bcrypt'),
     _ = require('lodash');

const { User, validateUser } = require('../models/user')
const auth_mid = require('../middleware/middleware_auth')

const app = express();
const router = express.Router()

// Authorization Process
router.get('/me', auth_mid, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password') // we should change the password exclusion much later
  res.send(user)
 })

module.exports = router;