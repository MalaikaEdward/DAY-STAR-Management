// Dependencies
const express = require('express');
const mongoose =require("mongoose")
const path =require("path");
const cors = require("cors");
const passport = require("passport")
const expressSession = require("express-session")({
  secret:"secret",
  resave:false,
  saveUninitialized:false
})

require("dotenv").config();

//import register model with user details
const Administer = require("./models/Administer")

//importing routes
 const registerBabyRoutes = require("./routes/registerbabyRoutes");
 const adminloginRoutes = require("./routes/adminloginRoutes");
 const admindashboardRoutes = require("./routes/admindashboardRoutes");
 const adminregisterRoutes = require("./routes/adminregisterRoutes");
 const sitterRoutes = require("./routes/sitterRoutes");
 const landingRoutes = require("./routes/landingRoutes");
 const blogRoutes = require("./routes/blogRoutes")
 const aboutRoutes = require("./routes/aboutRoutes")
// instantiations
const app = express();


//Configurations
mongoose.connect(process.env.DATABASE,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", err => {
    console.error(`Connection error: ${err.message}`);
 });

app.set("view engine","pug"); // setting the view engine to pug
app.set("views", path.join(__dirname,"views")); //specify the directory where the views are found

// Middleware
app.use(express.static(path.join(__dirname, "public")))//set directory fot static fires 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


//Express session configurations 
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

//passport configuration
passport.use(Administer.createStrategy());
passport.serializeUser(Administer.serializeUser());
passport.deserializeUser(Administer.deserializeUser());

//  routes

//use imported routes
app.use("/", registerBabyRoutes);
app.use("/", adminloginRoutes);
app.use("/", admindashboardRoutes)
app.use("/", adminregisterRoutes )
app.use("/", sitterRoutes)
app.use("/", landingRoutes)
app.use("/", blogRoutes)
app.use("/", aboutRoutes)

// app.get("/parentlogin", (req, res)=>{
  // res.render(parentlogin-parent)
// });

// app.get("/parentlogin", (req, res)=>{
//   res.render(parentlogin-parent)
// });


// app.get('/', (req, res) => { // new
//   res.send('Homepage! Hello world.');
// });


// app.get('/about', (req, res) => { // new
//   res.send('Homepage! Hello world.');
// });

// app.get('/books/:bookId', (req, res) => {
//   res.send(req.params.bookId);
//   console.log(req.bookId)
// });

// // app.get('/students/:studentsId', (req, res) => {
// // res.send("xx"+req.params.studentsId);
// // console.log(req.params)
// // });


// app.get('/registerbaby', (req, res) => {
//   res.sendFile(__dirname + "/register-baby.html");
// });

// app.post('/registerbaby', (req, res) => {
//   console.log(req.body)
//   let baby=req.body
//   // res.redirect("/index")
//   res.json({message:"baby registered",baby})
// })

// // querry params
// app.get('/student', (req, res) => {
//   res.send("This is class" + req.query.class + "cohort" + req.querry.cohort)
// })

// app.get('/babies', (req, res) => {
//   res.npsend("This is a baby" + req.query.age + "cohort" + req.querry.name)
// })

// For invalid routes
app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});


// Always the last line in your code
app.listen(4500, () => console.log('listening on port 4500'));