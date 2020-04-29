const express = require('express')
const router = express.Router()

const animals = [
  {
    id: 1,
    animal: 'Alligator',
    name: 'Albert'
  },
  {
    id: 2,
    animal: 'Bat',
    name: 'Ben'
  },
  {
    id: 3,
    animal: 'Chameleon',
    name: 'Charlie'
  },
  {
    id: 4,
    animal: 'Dragonfly',
    name: 'Dave'
  },
  {
    id: 5,
    animal: 'Eel',
    name: 'Eric'
  },
  {
    id: 6,
    animal: 'Fox',
    name: 'Frances'
  },
  {
    id: 7,
    animal: 'Gorilla',
    name: 'Gabe'
  },
  {
    id: 8,
    animal: 'Hyena',
    name: 'Harold'
  },
  {
    id: 9,
    animal: 'Iguana',
    name: 'Isaac'
  },
  {
    id: 10,
    animal: 'Jaguar',
    name: 'Jason'
  },
  {
    id: 11,
    animal: 'Koala',
    name: 'Kevin'
  },
  {
    id: 12,
    animal: 'Lizard',
    name: 'Luke'
  },
  {
    id: 13,
    animal: 'Manatee',
    name: 'Michael'
  },
  {
    id: 14,
    animal: 'Newt',
    name: 'Neville'
  },
  {
    id: 15,
    animal: 'Octopus',
    name: 'Oscar'
  },
  {
    id: 16,
    animal: 'Platypus',
    name: 'Peter'
  },
  {
    id: 17,
    animal: 'Quokka',
    name: 'Quinn'
  },
  {
    id: 18,
    animal: 'Reindeer',
    name: 'Ryan'
  },
  {
    id: 19,
    animal: 'Snake',
    name: 'Sam'
  },
  {
    id: 20,
    animal: 'Tiger',
    name: 'Tim'
  },
  {
    id: 21,
    animal: 'Urchin',
    name: 'Ryan'
  },
  {
    id: 22,
    animal: 'Vulture',
    name: 'Victor'
  },
  {
    id: 23,
    animal: 'Wasp',
    name: 'Wayne'
  },
  {
    id: 24,
    animal: 'Xerus',
    name: 'Xavier'
  },
  {
    id: 25,
    animal: 'Yak',
    name: 'Yusuf'
  },
  {
    id: 26,
    animal: 'Zebra',
    name: 'Zane'
  }
]

// defing the route and what it responds with
// the path here takes place AFTER what is defined in the server route
// in postman this would be "localhost:3000/animals/all"
router.get('/all', (req, res) => {
  // respdonding with json data
  res.json(animals)
})

// filters the animals array and returns the object that matches the id params
// router.get('/:id', (req, res) => {
//   const { id } = req.params
//   const animal = animals.filter(animalObject => {
//     return animalObject.id === Number(id)
//   })
//   res.json(
//     animal[0]
//   )
// })

// returns the first item in the array that has a matching id with the params
router.get('/:id', (req, res) => {
  const { id } = req.params
  const animal = animals.reduce((ac, cv) =>
    ac.id === Number(id) ? ac : cv
  )
  res.json(
    animal
  )
})

module.exports = router
