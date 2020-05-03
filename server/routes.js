const express = require('express')
const router = express.Router()

// defing the route and what it responds with
// the path here takes place AFTER what is defined in the server route
// in postman this would be "localhost:3000/animals/all"
router.get('/all', (req, res) => {
  // respdonding with json data
  res.json(animals)
})

// filters the animals array and returns the object that matches the id params
router.get('/:id', (req, res) => {
  const { id } = req.params
  const animal = animals.filter(animalObject => {
    return animalObject.id === Number(id)
  })
  res.json(animal[0])
})

// returns the first item in the array that has a matching id with the params
// router.get('/:id', (req, res) => {
//   const { id } = req.params
//   const animal = animals.reduce((ac, cv) =>
//     ac.id === Number(id) ? ac : cv
//   )
//   res.json(animal)
// })

module.exports = router
