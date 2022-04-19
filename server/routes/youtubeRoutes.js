'use strict';

const express = require('express');
const apicache = require('apicache');

const {
  getGuitarVideos,
  getPianoVideos,
  getDrumVideos,
  getViolinVideos,
  getSaxophoneVideos,
} = require('../controllers/youtubeControllers');

const router = express.Router();

// Caches API responses for performance and to avoid going over Google's quota when testing
let cache = apicache.middleware;

router.route('/guitar').get(cache('2 hours'), getGuitarVideos);
router.route('/piano').get(cache('2 hours'), getPianoVideos);
router.route('/drums').get(cache('2 hours'), getDrumVideos);
router.route('/violin').get(cache('2 hours'), getViolinVideos);
router.route('/saxophone').get(cache('2 hours'), getSaxophoneVideos);

module.exports = router;
