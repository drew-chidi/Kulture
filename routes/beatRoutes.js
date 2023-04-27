const express = require('express');
const router = express.Router();
const {
  getPopularBeats,
  getBeatsGenre,
} = require('../controllers/beatController');

router.get('/api/beats/popular', getPopularBeats);

router.get('/api/beats/genre', getBeatsGenre);

module.exports = router;
