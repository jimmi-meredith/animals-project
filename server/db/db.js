const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)

module.exports = {
  showAllAnimals,
  showAnimalById
}

function showAllAnimals () {
  // Selecting all of the items in the animals table in the database
  db('animals')
  // returns array of all table items
    .select()
}

function showAnimalById (id) {
  db('animals')
    // Selecting all of the items in the animals table in the database
    .select()
    // where the id column matches the id
    .where('id', id)
    // gets back a single animal instead of an array
    .first()
}
