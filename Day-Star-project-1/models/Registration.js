const { text } = require("express");
const mongoose = require("mongoose");
//Access the schema in mongoose function 
const schema = mongoose.schema;

const babyschema = new mongoose.Schema({
    name:{
      type:String,
      
      trim:true  
    },
    age:{
        type:String,
        trim:true      
    },
    babygender:{
        type:String,
        trim:true   
    },
    fatherNames:{
        type:String,
        trim:true
    }, 
    fatherContact:{
        type:String,
        trim:true 
    },
    schoolfeePaid:{
        type:String,
        trim:true   
    },
    babyperiodOfStay:{
        type:String,
        trim:true   
    },
    babychildNumber:{
        type:String,
        trim:true   
    },
    address:{
        type:String,
        trim:true   
    }
    

});

module.exports = mongoose.model("Baby", babyschema)
