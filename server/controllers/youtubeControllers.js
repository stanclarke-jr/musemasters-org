'use strict';

const asyncHandler = require('express-async-handler');
require('dotenv').config();
const queries = require('../queries');

const { YOUTUBE_API_V3 } = process.env;

// Base YouTube api url - https://www.googleapis.com/youtube/v3/

/* Example url using axios or node-fetch to access YouTube Search List endpoint:
https://www.googleapis.com/youtube/v3/search/?key=${process.env.YOUTUBE_API_KEY}&part=id,snippet&maxResults=50&${query} */

// Using googleapis instead (syntactic sugar for the api url, it also returns a promise)
const { google } = require('googleapis');
const youtube = google.youtube({
  version: 'v3',
  auth: YOUTUBE_API_V3,
});

let params = {
  // https://developers.google.com/youtube/v3/docs/search/list#parameters
  // TODO: Add more parameters
  part: 'snippet',
  q: queries,
  type: 'video',
  maxResults: 10,
};

const getGuitarVideos = asyncHandler(async (request, response) => {
  params.q = queries.allGuitarVideos;
  const youtubeResponse = await youtube.search.list(params);
  const videoData = youtubeResponse.data.items.map((item) => item);
  response.send(videoData);
});
const getPianoVideos = asyncHandler(async (request, response) => {
  params.q = queries.allPianoVideos;
  const youtubeResponse = await youtube.search.list(params);
  const videoData = youtubeResponse.data.items.map((item) => item);
  response.send(videoData);
});
const getDrumVideos = asyncHandler(async (request, response) => {
  params.q = queries.allDrumVideos;
  console.log(params.q);

  const youtubeResponse = await youtube.search.list(params);
  const videoData = youtubeResponse.data.items.map((item) => item);
  response.send(videoData);
});
const getViolinVideos = asyncHandler(async (request, response) => {
  params.q = queries.allViolinVideos;
  console.log(params.q);

  const youtubeResponse = await youtube.search.list(params);
  const videoData = youtubeResponse.data.items.map((item) => item);
  response.send(videoData);
});
const getSaxophoneVideos = asyncHandler(async (request, response) => {
  params.q = queries.allSaxophoneVideos;
  console.log(params.q);

  const youtubeResponse = await youtube.search.list(params);
  const videoData = youtubeResponse.data.items.map((item) => item);
  response.send(videoData);
});

module.exports = {
  getGuitarVideos,
  getPianoVideos,
  getDrumVideos,
  getViolinVideos,
  getSaxophoneVideos,
};
