const { AUTH, AUTH_MESSAGE } = require('../utils/constants');

class AuthErrors extends Error {
  constructor(message = AUTH_MESSAGE) {
    super(message);
    this.code = AUTH;
    this.name = 'Unauthorized';
  }
}

module.exports = AuthErrors;
