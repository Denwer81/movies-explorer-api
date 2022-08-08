const {
  SIGN_UP_ERR,
  SIGN_UP_ERR_MESSAGE,
  BAD_REQUEST,
  BAD_REQUEST_MESSAGE,
  SERVER_ERR,
  SERVER_ERR_MESSAGE,
} = require('../utils/constants');

const setError = (err, _, res, next) => {
  if (err.code === 11000) {
    res
      .status(SIGN_UP_ERR)
      .send({ message: SIGN_UP_ERR_MESSAGE });
    return;
  }
  if (err.name === 'CastError' || err.name === 'ValidationError') {
    res
      .status(BAD_REQUEST)
      .send({ message: BAD_REQUEST_MESSAGE });
    return;
  }
  if (err.code === undefined) {
    res
      .status(SERVER_ERR)
      .send({ message: SERVER_ERR_MESSAGE });
  }

  res.status(err.code).send({ message: err.message });

  next();
};

module.exports = {
  setError,
};
