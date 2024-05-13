const mongoose =require("mongoose");

const babyCheckInOutSchema = new mongoose.Schema({
    childName:{
        type:String,
        trim:true  
    },

    personBrought:{
        type:String,
        trim:true  
    },

    contactBrought:{
        type:String,
        trim:true  
    },

    periodOfStay:{
        type:String,
        trim:true  
    },

    assignSitter:{
        type:String,
        trim:true  
    },
    eventType:{
        type: String,
        enum: ["checkin","checkout"],
        trim:true
    }
});
module.exports = mongoose.model("babyCheckInOut", babyCheckInOutSchema)