const jwt = require('jsonwebtoken')

const secrets = require('../config/secrets')

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodeToken) => {
      if (err) {
        res.status(401).json("invalid credentials")
      }
      else {
        req.user = {department: decodeToken.department, username: decodeToken.username}
        next()
      }
    })
  } 
  else {
    res.status(400).json({ message: 'No token provided' });
  }
};