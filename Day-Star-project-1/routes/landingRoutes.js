const express = require('express');
const router = express.Router();

router.get("/landingpage", (req, res) => {
    res.render('landingpage');
  })




  module.exports = router;