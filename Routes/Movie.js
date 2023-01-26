const express = require('express')
const { addMovie, readMovies, deleteMovie, updateMovie, readMovie } = require('../Controllers/Movie')

const movieRouter = express.Router()

movieRouter.post('/addMovie',addMovie)

movieRouter.get('/readMovies',readMovies)

movieRouter.delete('/deleteMovie/:id',deleteMovie)

movieRouter.put('/updataMovie/:id',updateMovie)

movieRouter.get('/readMovie/:id',readMovie)  

module.exports = movieRouter