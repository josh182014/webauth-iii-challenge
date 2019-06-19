const db = require('../data/dbConfig')

module.exports = {
    find,
    findByUsername,
    add,
}

function find() {
    return db('users')
}

function findByUsername(username) {
    return db('users')
    .where({username})
    .first()
}

function add(user) {
    return db('users')
    .insert(user, 'id')
    .then(([id]) => {
        return db('users')
        .where({id})
        .first()
    })
}