const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.header(x - auth - token)
  if (!token) return res.status(401).send('Access Denied! No token provided')

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.user = decoded

    // pass control to next CB handler
    next()
  } catch (error) {
    res.status(400).send('Invalid Token')
  }
}