const express = require('express');
const router = express.Router();

router.get('/landingpage', function(req, res, next) {
  res.render('landing'); // Rendering the "landingpage" view
});

// Define a new route that acts as an API endpoint for redirection
router.get('/landingpage', function(req, res, next) {
  // Redirecting to the "/nextpage" route
  res.redirect('/login');
});


  module.exports = router;