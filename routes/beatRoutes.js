const express = require('express');
const router = express.Router();
const {
  getPopularBeats,
  getBeatsGenre,
} = require('../controllers/beatController');

const { protect } = require('../middleware/authMiddleware');

router.get('/popular', getPopularBeats);
router.get('/genre', getBeatsGenre);

module.exports = router;
