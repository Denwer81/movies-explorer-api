const mainRouter = require('express').Router();

const { createUser, login } = require('../controllers/users');
const { signUpValidtion, signInValidation } = require('../utils/joiValidation');
const { auth } = require('../middlewares/auth');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const NotFoundError = require('../errors/NotFoundError');

mainRouter.post('/signin', signInValidation, login);
mainRouter.post('/signup', signUpValidtion, createUser);

mainRouter.use('/users', auth, usersRouter);
mainRouter.use('/movies', auth, moviesRouter);

mainRouter.use((_, __, next) => next(new NotFoundError('Путь не найден')));

module.exports = mainRouter;
