module.exports.AUTH = 401;
module.exports.BAD_REQUEST = 400;
module.exports.FORBIDDEN = 403;
module.exports.NOT_FOUND = 404;
module.exports.SERVER_ERR = 500;
module.exports.SIGN_UP_ERR = 409;

module.exports.AUTH_MESSAGE = 'Необходима авторизация';
module.exports.BAD_USER_DATA_MESSAGE = 'Email или пароль не верные';
module.exports.BAD_REQUEST_MESSAGE = 'Некорректные данные';
module.exports.FORBIDDEN_MESSAGE = 'Ошибка доступа';
module.exports.NOT_FOUND_MESSAGE = 'Переданые данные не найдены';
module.exports.PAGE_NOT_FOUND_MESSAGE = 'Путь не найден';
module.exports.SERVER_ERR_MESSAGE = 'На сервере произошла ошибка';
module.exports.SIGN_UP_ERR_MESSAGE = 'Пользователь с таким Email существует';

module.exports.allowedCors = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://api.nomoreparties.co/beatfilm-movies',
  'http://denwer.nomoredomains.sbs',
  'https://api.denwer.nomoredomains.sbs',
];
