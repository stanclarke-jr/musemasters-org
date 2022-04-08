'use-strict';

require('dotenv').config();
const { YOUTUBE_API_V3 } = process.env;

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const axios = require('axios');
const { google } = require('googleapis');
const { nextTick } = require('process');
const youtube = google.youtube({
  version: 'v3',
  auth: YOUTUBE_API_V3,
});

const baseAPIUrl = 'https://www.googleapis.com/youtube/v3';

const app = express();

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

//--- ENDPOINTS --- //
app.get('/', (request, response) => {
  response.send('Hello from our API');
});

// Using axios
app.get('/search', async (request, response) => {
  try {
    const searchQuery = request.query.search_query;
    const url = `${baseAPIUrl}/search?key=${YOUTUBE_API_V3}&type=video&part=snippet&q=${searchQuery}`;
    const axiosResponse = await axios.get(url);
    const titles = axiosResponse.data.items.map((item) => item.snippet.title);
    response.send(titles);
  } catch (error) {
    next(error);
  }
});

// Using googleapis (Syntactic sugar for the url. Also returns a promise. )
app.get('/search-with-googleapis', async (request, response) => {
  try {
    const searchQuery = request.query.search_query;
    // https://developers.google.com/youtube/v3/docs/search/list#parameters
    // TODO: Add more parameters
    const youtubeResponse = await youtube.search.list({
      part: 'snippet',
      q: searchQuery,
      type: 'video',
    });
    const titles = youtubeResponse.data.items.map((item) => item.snippet.title);
    response.send(titles);
  } catch (error) {
    next(error);
  }
});

const PORT = 8000;

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
