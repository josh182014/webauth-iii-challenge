const express = require('express');
const bcrypt = require('bcryptjs')

const Users = require('../users/users-model')
const generateToken = require('../config/generateToken')

const router = express.Router()

router.post('/register', (req, res) => {

    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    Users.add(req.body)
    .then(user => {
        const token = generateToken(user)
        res.status(200).json({user: user, token})
    })
    .catch(error => {
        res.status(500).json('server error')
    })
})

router.post('/login', (req, res) => {
    let { username, password } = req.body;
    Users.findByUsername(req.body.username)
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user)
            res.status(200).json({user: user, token})
        }
        else {
            res.status(401).json('Please enter valid credentials')
        }
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

module.exports = router