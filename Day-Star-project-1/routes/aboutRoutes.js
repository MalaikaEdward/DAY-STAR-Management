const express = require('express');
const router = express.Router();

router.get('/aboutus', function(req, res, next) {
  res.render('aboutus'); // Rendering the "landingpage" view
});

module.exports = router;