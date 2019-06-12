const express = require('express')

const Users = require('./users-model')

const router = express.Router()

router.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

module.exports = router