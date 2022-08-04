require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const { errors } = require('celebrate');

const { NODE_ENV, MONGO_URL } = process.env;
const { DEV_MONGO_URL } = require('./utils/config');
const { requestLogger, errorLogger } = require('./middlewares/loggers');
const { limiter } = require('./utils/limiter');
const { allowedCors } = require('./utils/constants');
const { setError } = require('./middlewares/errors');
const mainRouter = require('./routes/index');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect(NODE_ENV === 'production' ? DEV_MONGO_URL : MONGO_URL);

app.use(express.json());

app.use(helmet());

app.use(cors({
  origin: allowedCors,
  credentials: true,
}));

app.use(requestLogger);

app.use(limiter);

app.use(mainRouter);

app.use(errorLogger);

app.use(errors());
app.use(setError);

app.listen(PORT);
