const express = require('express')
const noteModel = require('./models/note.model')
const cors = require('cors')

const app = express()
//Middlewares
app.use(express.json())
app.use(cors())

module.exports = app;