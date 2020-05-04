const express = require('express')
const animalsroutes = require('./routes')
const path = require('path')

// a function that returns an object that represents the entire server
const server = express()

// telling the server to understand json data in it's requests
server.use(express.json())

// connecting the route to the server
// this is the prefix for all animals routes
server.use('/animals', animalsroutes)

server.use(express.static(path.join(__dirname, './public')))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
