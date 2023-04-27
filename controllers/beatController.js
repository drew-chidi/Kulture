const asyncHandler = require('express-async-handler');

// @desc popular beats
// @route GET /api/beats
// @access Public

const getPopularBeats = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get popular beats' });
});

// @desc popular beats
// @route GET /api/beats
// @access Public

const getBeatsGenre = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get beats genre' });
});

module.exports = {
  getPopularBeats,
  getBeatsGenre,
};
