const { SERVER_ERR, SERVER_ERR_MESSAGE } = require('../utils/constants');

class ServerErrors extends Error {
  constructor(message = SERVER_ERR_MESSAGE) {
    super(message);
    this.code = SERVER_ERR;
    this.name = 'ServerError';
  }
}

module.exports = ServerErrors;
