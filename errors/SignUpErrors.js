const { SIGN_UP_ERR, SIGN_UP_ERR_MESSAGE } = require('../utils/constants');

class SignUpErrors extends Error {
  constructor(message = SIGN_UP_ERR_MESSAGE) {
    super(message);
    this.code = SIGN_UP_ERR;
    this.name = 'SignUpError';
  }
}

module.exports = SignUpErrors;
