const express = require('express');
const router = express.Router();

router.get('/DayStarBlog', function(req, res, next) {
  res.render('daystarBlog'); // Rendering the "landingpage" view
});


module.exports = router;