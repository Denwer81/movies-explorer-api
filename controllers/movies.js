const Movie = require('../models/movie');
const NotFoundError = require('../errors/NotFoundError');
const ForbidenError = require('../errors/ForbidenErrors');

const getMovies = (req, res, next) => {
};

const createMovie = (req, res, next) => {
};

const deleteMovie = (req, res, next) => {
};

const getCards = (_, res, next) => {
  Movie.find({})
    .then((cards) => res.send(cards))
    .catch(next);
};

const createCard = (req, res, next) => {
  const { name, link } = req.body;

  Movie.create({ name, link, owner: req.user._id })
    .then((card) => res.send(card))
    .catch(next);
};

const deleteCard = (req, res, next) => {
  Movie.findById(req.params.cardId)
    .orFail(() => new NotFoundError())
    .then((card) => {
      if (card.owner._id.toString() !== req.user._id) {
        return next(new ForbidenError());
      }
      return card.remove()
        .then((deleted) => res.send(deleted));
    })
    .catch(next);
};

// const updateLike = (req, res, next, method) => {
//   Movie.findByIdAndUpdate(
//     req.params.cardId,
//     { [method]: { likes: req.user._id } },
//     { new: true },
//   )
//     .orFail(new NotFoundError())
//     .then((card) => res.send(card))
//     .catch(next);
// };

// const likeCard = (req, res, next) => updateLike(req, res, next, '$addToSet');

// const dislikeCard = (req, res, next) => updateLike(req, res, next, '$pull');

module.exports = { getMovies, createMovie, deleteMovie };
