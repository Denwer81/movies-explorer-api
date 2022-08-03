const mainRouter = require('express').Router();
// const { celebrate } = require('celebrate');

const { createUser, login } = require('../controllers/users');
// const { signUpValidtion, signInValidation } = require('../validation/JoiValidation');
const auth = require('../middlewares/auth');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const NotFoundError = require('../errors/NotFoundError');

mainRouter.post('/signin', login);
mainRouter.post('/signup', createUser);

mainRouter.use('/users', auth, usersRouter);
mainRouter.use('/movies', moviesRouter);

mainRouter.use((_, __, next) => next(new NotFoundError('Путь не найден')));

module.exports = mainRouter;
