'use-strict';

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const userRoutes = require('./routes/userRoutes');
const youtubeRoutes = require('./routes/youtubeRoutes');
const connectDB = require('./config/db');
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');

const app = express();

connectDB();

// This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
app.use(morgan('tiny'));
// Helps secure Express apps by setting various HTTP headers. see https://github.com/helmetjs/helmet
app.use(helmet());
// Parses the JSON body
app.use(express.json());
// Parses the JSON body, in addition to form content
app.use(express.urlencoded({ extended: false }));
// Any requests for static files will go into the public folder
app.use(express.static('public'));

//-----  ROUTES -----//
app.use('/api', youtubeRoutes);
app.use('/api/users', userRoutes);

// Middleware error handlers
app.use(notFound);
app.use(errorHandler);

const PORT = 8000;

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
