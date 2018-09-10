const express = require('express');
const router = express.Router();
var score = require('./routes/scorer.js');
var league = require('./routes/league.js');


router.get('/show', league);
router.get('/show/:league_slug/scorer', score);
module.exports = router;