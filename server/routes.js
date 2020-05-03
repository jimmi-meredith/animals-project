const express = require('express')
const router = express.Router()
const db = require('../server/db/db')

router.get('/all', (req, res) => {
  // calls funciton in the database files
  db.showAllAnimals()
    .then(animals => res.json(animals))
    // throws an error if database function fails to run
    .catch(error => {
      res.status(500)
        .send('DATABASE ERROR: ' + error.message)
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  // calls funciton in the database files
  db.showAnimalById(id)
    .then(animal => res.json(animal))
    // throws an error if database function fails to run
    .catch(error => {
      res.status(500)
        .send('DATABASE ERROR: ' + error.message)
    })
})

// When the data was just an array and not seed data

// defing the route and what it responds with
// the path here takes place AFTER what is defined in the server route
// in postman this would be "localhost:3000/animals/all"
// router.get('/all', (req, res) => {
//   // respdonding with json data
//   res.json(animals)
// })

// filters the animals array and returns the object that matches the id params
// router.get('/:id', (req, res) => {
//   const { id } = req.params
//   const animal = animals.filter(animalObject => {
//     return animalObject.id === Number(id)
//   })
//   res.json(animal[0])
// })

// returns the first item in the array that has a matching id with the params
// router.get('/:id', (req, res) => {
//   const { id } = req.params
//   const animal = animals.reduce((ac, cv) =>
//     ac.id === Number(id) ? ac : cv
//   )
//   res.json(animal)
// })

module.exports = router
