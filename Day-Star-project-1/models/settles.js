const mongoose = require("mongoose");
//Access the schema in mongoose function 

const settlesSchema = new mongoose.Schema({
  fullName:{
   type:String,
   trim:true  
  },

  emailAddress:{
    type:String,
    trim:true  
  },

  phoneNumber:{
    type:String,
    trim:true  
  },

  address:{
    type:String,
    trim:true  
  },

  experience:{
    type:String,
    trim:true  
  }, 

  availability:{
    type:String,
    trim:true  
  }


})

module.exports = mongoose.model("settles", settlesSchema)
