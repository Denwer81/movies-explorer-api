const { celebrate, Joi } = require('celebrate');
const validator = require('validator');
const BadRequestErrors = require('../errors/BadRequestErrors');

const urlValidation = Joi.string().required().custom((v) => {
  if (!validator.isURL(v)) {
    throw new BadRequestErrors();
  }
  return v;
});

const signInValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(2),
  }),
});

const signUpValidtion = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(50),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(2),
  }),
});

const updateProfileValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(50),
    email: Joi.string().required().email(),
  }),
});

const createMovieValidation = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: urlValidation,
    trailerLink: urlValidation,
    thumbnail: urlValidation,
    owner: Joi.string().length(24).hex(),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const deleteMovieValidation = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().length(24).hex(),
  }),
});

module.exports = {
  signInValidation,
  signUpValidtion,
  updateProfileValidation,
  createMovieValidation,
  deleteMovieValidation,
};
