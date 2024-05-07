const express = require("express");
const router = express.Router();
const passport = require("passport");

//import model
// const Administer = require("../models/Administer")

// router.get("/adminregister", (req, res) =>{
//     res.render("adminregister");
// });

// //post route
// //installing the async function
// router.post("/adminregister", async(req, res) => {
//     try {
//         const adminRegister = new Administer(req.body);
//         console.log(adminRegister)
//         await Administer.register(adminRegister, req.body.password,(err)=>{
//             if(err){
//                 throw err
//             }
//             res.redirect("/adminregister")
//         })
//     } catch (error) {
//         res.status(400).send("user not registered")
//         console.log(error)
//     }
// })

// //import model
// const adminRegister = require("../models/adminlogin");
// const { Admin } = require("mongodb");
// const Administer = require("../models/Administer");
// router.get("/adminregister", (req, res) => {
//     res.render("Adminlogin");
// });
//post route
//installing the async function
router.post("/adminregister", async (req, res) => {
    try {
    const adindata = new box(req.body);
    await box.register(adindata,req.body.password,(err)=> {
        if(err) {
            throw err
        }
        res.redirect("/adminregister")
    })
    res.send("success") 
    }catch (error) { // incase of errors
      res.status(400).send("sorry something went wrong")
      console.log("Error +registering the baby..", error);
    }

    // res.redirect("/index")

});

module.exports = router;