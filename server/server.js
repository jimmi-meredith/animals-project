const express = require('express')
const animalsroutes = require('./routes')

// a function that returns an object that represents the entire server
const server = express()

// telling the server to understand json data in it's requests
server.use(express.json())

// connecting the route to the server
// this is the prefix for all animals routes
server.use('/animals', animalsroutes)

module.exports = server
