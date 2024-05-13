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

//sitters list from database
router.get("/sitterlist", async (req, res) => {
  try {
  
    let sitters = await settles.find(); //from line8
    res.render("sitterlist", { sitters: sitters }); // to display sitters from data base
    console.log("display sitters", sitters);
  } catch (error) {
    res.status(400).send("unable to find sitters from database!");
    console.log("unable to find sitters from database!...", error);
  }
});

// GET route to render form for updating babysitter details
router.get("/sittersUpdate/:id", async (req, res) => {
  try {
    // Find the sitter by ID
    let sitter = await settles.findById(req.params.id);
    // Render the sittersUpdate template and pass the sitter data
    res.render("sittersUpdate", { sitter: sitter });
  } catch (error) {
    console.log("Error finding a sitter:", error);
    res.status(400).send("Unable to update sitter in the database");
  }
});

router.post("/sittersUpdate", async(req, res)=> {
  try{
    console.log(req.body);
    await settles.findOneAndUpdate({ _id: req.query.id }, req.body, {
      new: true,
    });
    console.log();
    res.redirect("/sitterlist")
  } catch (error) {
    res.status(404).send("unable to update sitter in the db!");
  }
});

//delete route for form in database
router.post("/sitterdelete", async (req, res) => {
  try {
    await settles.deleteOne({ _id: req.body.id });

    res.redirect("back");
    //res.send('success registering a siiter!');
    //to display on same page//res.redirect("/registerbaby")
  } catch (error) {
    res.status(400).send("unable to delete sitter from db!");
    console.log("error delete sitter...", error);
  }
});

module.exports = router;


