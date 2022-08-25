const { FORBIDDEN, FORBIDDEN_MESSAGE } = require('../utils/constants');

class ForbidenErrors extends Error {
  constructor(message = FORBIDDEN_MESSAGE) {
    super(message);
    this.code = FORBIDDEN;
    this.name = 'Forbiden';
  }
}

module.exports = ForbidenErrors;
