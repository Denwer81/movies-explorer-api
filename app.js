require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
// const { errors } = require('celebrate');
// const cors = require('cors');

const { requestLogger, errorLogger } = require('./middlewares/loggers');
// const allowedCors = require('./const/allowedCors');
const mainRouter = require('./routes/index');
const { setError } = require('./middlewares/errors');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/bitfilmsdb');

app.use(express.json());

app.use(helmet());

// app.use(cors({
//   origin: allowedCors,
//   credentials: true,
// }));

app.use(requestLogger);

app.use(mainRouter);

app.use(errorLogger);

// app.use(errors());
app.use(setError);

app.listen(PORT);
