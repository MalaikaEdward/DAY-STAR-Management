const mongoose = require("mongoose");
//Access the schema in mongoose function 

const purchaseSchema = new mongoose.Schema({
    itemName:{
     type:String,
     trim:true  
    },

    quantity:{
      type:String,
      trim:true  
    },

    itemImage:{
     type:String,
     trim:true  
    },

})

module.exports = mongoose.model("purchase", purchaseSchema)
