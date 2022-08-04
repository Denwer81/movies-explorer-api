const moviesRouter = require('express').Router();

const { createMovieValidation, deleteMovieValidation } = require('../utils/joiValidation');
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');

moviesRouter.get('/movies', getMovies);

moviesRouter.post('/movies', createMovieValidation, createMovie);

moviesRouter.delete('/:movieId', deleteMovieValidation, deleteMovie);

module.exports = moviesRouter;
