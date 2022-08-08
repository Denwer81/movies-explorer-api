const mainRouter = require('express').Router();
const { PAGE_NOT_FOUND_MESSAGE } = require('../utils/constants');

const { createUser, login } = require('../controllers/users');
const { signUpValidtion, signInValidation } = require('../utils/joiValidation');
const { auth } = require('../middlewares/auth');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const NotFoundError = require('../errors/NotFoundError');

mainRouter.post('/signin', signInValidation, login);
mainRouter.post('/signup', signUpValidtion, createUser);

mainRouter.use(auth);
mainRouter.use('/users', usersRouter);
mainRouter.use('/movies', moviesRouter);

mainRouter.use((_, __, next) => next(new NotFoundError(PAGE_NOT_FOUND_MESSAGE)));

module.exports = mainRouter;
