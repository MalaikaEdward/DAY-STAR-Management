const express = require("express");
const router = express.Router();

//import model
const Baby = require("../models/Registration");
const settles = require("../models/settles");
const babyCheckIn = require("../models/BabyCheckInOut")
router.get("/register", (req, res) => {
  res.render("registerbaby");
});
//post route
router.post("/register", async (req, res) => {
  try {
    const baby = new Baby(req.body);
    console.log(baby);
    await baby.save();
    res.redirect("/register");
  } catch (error) {
    // incase of errors
    res.status(400).send("sorry something went wrong");
    console.log("Error +registering the baby..", error);
  }
});

//baby list from database
router.get("/babylist", async (req, res) => {
  try {
    let babies = await Baby.find(); //from line8
    res.render("babylist", { babies: babies }); // to display babies from data base
    console.log("display babies", babies);
  } catch (error) {
    res.status(400).send("unable to find babies from database!");
    console.log("unable to find babies from database!...", error);
  }
});

//delete route for form in database
router.post("/delete", async (req, res) => {
  try {
    await Baby.deleteOne({ _id: req.body.id });

    res.redirect("back");
    //res.send('success registering a baby!');
    //to display on same page//res.redirect("/registerbaby")
  } catch (error) {
    res.status(400).send("unable to delete baby from db!");
    console.log("error delete baby...", error);
  }
});

// PUT API to update baby details
router.get("/babiesupdate/:id", async (req, res) => {
  try {
     // Find the baby by ID and update it
    let baby = await Baby.findById(req.params.id);
    res.render("babiesUpdate", { baby: baby });

  } catch (error) {
    console.log("error finding a baby!", error)
    res.status(400).send("unable to update baby in the db!");
  }
});

router.post("/babiesupdate", async(req, res)=> {
  try{
    await Baby.findOneAndUpdate({_id: req.query.id}, req.body, {
      new: true,
    });
    res.redirect("/babylist")
  } catch (error) {
    res.status(404).send("unable to update baby in the db!");
  }
});

// clockin baby route for form 
router.get("/babyCheckIn/:id", async (req, res) => {
  try {
    const Baby = await babyCheckIn.find();
    const babyCleckIn = await Baby.findOne({ _id: req.params.id });
    res.render("checkin", {
      baby: babyCleckIn,
      babies: babies  
    });
  } catch (error) {
    console.log("Error finding baby:", error);
    res.status(400).send("Unable to find baby from database");
  }
});

router.post("/babyCheckIn", async (req, res) => {
  try {
    await babyCheckIn.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/babylist");
  } catch (error) {
    console.log("Error updating baby:", error);
    res.status(404).send("Unable to update baby");
  }
});

// router.get("/babycheckin", (req, res) =>{
//   res.render("babycheck");
// });

module.exports = router;
