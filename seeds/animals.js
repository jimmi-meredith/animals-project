exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(() => {
      // Inserts seed entries
      return knex('animals').insert([
        { id: 1, species: 'Alligator', name: 'Albert' },
        { id: 2, species: 'Bat', name: 'Ben' },
        { id: 3, species: 'Chameleon', name: 'Charlie' },
        { id: 4, species: 'Dragonlfy', name: 'Dave' },
        { id: 5, species: 'Eel', name: 'Eric' },
        { id: 6, species: 'Fox', name: 'Frances' },
        { id: 7, species: 'Gorilla', name: 'Gabe' },
        { id: 8, species: 'Hyena', name: 'Harold' },
        { id: 9, species: 'Iguana', name: 'Isaac' },
        { id: 10, species: 'Jaguar', name: 'Jason' },
        { id: 11, species: 'Koala', name: 'Kevin' },
        { id: 12, species: 'Lizard', name: 'Luke' },
        { id: 13, species: 'Manatee', name: 'Michael' },
        { id: 14, species: 'Newt', name: 'Neville' },
        { id: 15, species: 'Ocotopus', name: 'Oscar' },
        { id: 16, species: 'Platypus', name: 'Peter' },
        { id: 17, species: 'Quokka', name: 'Quinn' },
        { id: 18, species: 'Reindeer', name: 'Ryan' },
        { id: 19, species: 'Snake', name: 'Sam' },
        { id: 20, species: 'Tiger', name: 'Tim' },
        { id: 21, species: 'Urchan', name: 'Umar' },
        { id: 22, species: 'Victor', name: 'Vulture' },
        { id: 23, species: 'Wasp', name: 'Wayne' },
        { id: 24, species: 'Xerus', name: 'Xavier' },
        { id: 25, species: 'Yak', name: 'Yusuf' },
        { id: 26, species: 'Zebra', name: 'Zane' }
      ])
    })
}
