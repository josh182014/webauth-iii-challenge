const express = require('express');

const Users = require('../users/users-model')

const router = express.Router()

router.post('/register', (req, res) => {

    Users.add(req.body)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(error => {
        res.status(500).json('server error')
    })
})

router.post('/login', (req, res) => {
    Users.findByUsername(req.body.username)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

module.exports = router