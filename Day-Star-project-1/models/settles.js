const mongoose = require("mongoose");
//Access the schema in mongoose function 

const settlesSchema = new mongoose.Schema({
  fullName:{
   type:String,
   trim:true  
  },
  gender:{
    type:String,
    trim:true  
  },

  email:{
    type:String,
    trim:true  
  },

  phonenumber:{
    type:String,
    trim:true  
  },

  currentAddress:{
    type:String,
    trim:true  
  },

  Availability:{
    type:String,
    trim:true  
  },

  levelOfEducation:{
    type:String,
    trim:true  
  }, 

  Experience:{
    type:String,
    trim:true  
  }

});

module.exports = mongoose.model("settles", settlesSchema)
