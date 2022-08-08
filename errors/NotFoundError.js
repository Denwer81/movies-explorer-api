const { NOT_FOUND, NOT_FOUND_MESSAGE } = require('../utils/constants');

class NotFoundError extends Error {
  constructor(message = NOT_FOUND_MESSAGE) {
    super(message);
    this.code = NOT_FOUND;
    this.name = 'NotFound';
  }
}

module.exports = NotFoundError;
