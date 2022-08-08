const jwt = require('jsonwebtoken');

const { DEV_KEY } = require('../utils/config');
const AuthError = require('../errors/AuthErrors');

const { NODE_ENV, JWT_SECRET } = process.env;

const auth = (req, _, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new AuthError());
    return;
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : DEV_KEY);
  } catch (err) {
    next(new AuthError());
    return;
  }

  req.user = payload;
  next();
};

module.exports = {
  auth,
};
