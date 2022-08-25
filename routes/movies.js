const moviesRouter = require('express').Router();

const { createMovieValidation, deleteMovieValidation } = require('../utils/joiValidation');
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');

moviesRouter.get('/', getMovies);

moviesRouter.post('/', createMovieValidation, createMovie);

moviesRouter.delete('/:id', deleteMovieValidation, deleteMovie);

module.exports = moviesRouter;
