const express = require("express");
const router = express.Router();

//import model
const Administer = require("../models/Administer")

router.get("/adminregister", (req, res) =>{
    res.render("adminregister");
});

//post route
//installing the async function
router.post("/adminregister", async(req, res) => {
    try {
        const adminRegister = new Administer(req.body);
        console.log(adminRegister)
        await Administer.register(adminRegister, req.body.password,(err)=>{
            if(err){
                throw err
            }
            res.redirect("/adminregister")
        })
    } catch (error) {
        res.status(400).send("user not registered")
        console.log(error)
    }
})

// router.get ("/login", (req, res)=> {
//     res.render("Adminlogin")
// });

// router.post("/login", passport.authenticate("local",{failureRedirect:"/login"}), (req, res)=> {
//     req.session.user = req.user
//     console.log(req.body)
//     if (req.user.role ==="admin") {
//         res.redirect("/babylist")   
//     } else if(error){
//         return res.status(500).send("Error logging in..")   
//     }
  
// });

module.exports = router;