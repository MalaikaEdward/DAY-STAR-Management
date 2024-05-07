const express = require("express");
const router = express.Router();


//import model
const settles = require("../models/settles");
router.get("/Reg", (req, res) => {
  res.render("babysitter");
});
//post route

router.post("/Reg", async (req, res) => {
  try {
    const sitter = new settles(req.body);
    console.log(sitter);
    await sitter.save();
    res.redirect("/Reg");
  } catch (error) {
    // incase of errors
    res.status(400).send("sorry something went wrong");
    console.log("Error +registering the sitter..", error);
  }
});

module.exports = router;


