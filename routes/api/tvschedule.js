const express = require('express');
const router = express.Router();
const tvshowsController = require('../../controllers/tvshowsController');

router.route('/')
    .get(tvshowsController.getCurrentVideo)

router.route('/allvideos')
    .get(tvshowsController.getAllVideos);
router.route('/videoads')
    .get(tvshowsController.getVideoAds);
    
module.exports = router;