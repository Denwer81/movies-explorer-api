const { BAD_REQUEST, BAD_REQUEST_MESSAGE } = require('../utils/constants');

class BadRequestErrors extends Error {
  constructor(message = BAD_REQUEST_MESSAGE) {
    super(message);
    this.code = BAD_REQUEST;
    this.name = 'BadRequest';
  }
}

module.exports = BadRequestErrors;
