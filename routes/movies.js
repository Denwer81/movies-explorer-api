const moviesRouter = require('express').Router();

// const {
//   createCardValidation,
//   cardValidation,
// } = require('../validation/JoiValidation');
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');

moviesRouter.get('/movies', getMovies);

moviesRouter.post('/movies', createMovie);

moviesRouter.delete('/:movieId', deleteMovie);

module.exports = moviesRouter;
