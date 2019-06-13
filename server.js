const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const usersRouter = require('./users/users-router')
const authRouter = require('./auth/auth-router')
const restricted = require('./middleware/restricted')


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors())

server.get('/', (req, res) => {
  res.send("It's working! It's working! anakin.gif");
});

server.use('/api/auth', authRouter)
server.use('/api/users', restricted, usersRouter)


module.exports = server;