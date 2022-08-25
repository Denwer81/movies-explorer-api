const usersRouter = require('express').Router();
const { getUser, updateUser } = require('../controllers/users');

const { updateProfileValidation } = require('../utils/joiValidation');

usersRouter.get('/me', getUser);
usersRouter.patch('/me', updateProfileValidation, updateUser);

module.exports = usersRouter;
