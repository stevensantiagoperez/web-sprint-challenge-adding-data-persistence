// build your server here and require it from index.js

const express = require('express')
const projectsRouter = require('./task/router')

const server = express()

server.use(express.json())

server.use('/api/project', projectsRouter)

module.exports = server