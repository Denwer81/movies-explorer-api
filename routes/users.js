const usersRouter = require('express').Router();
const { getUser, updateUser } = require('../controllers/users');

// const {
//   updateProfileValidation,
//   getUserValidation,
// } = require('../validation/JoiValidation');

usersRouter.get('/me', getUser);
usersRouter.patch('/me', updateUser);

module.exports = usersRouter;
