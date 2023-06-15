const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    imagesurl:{
        type:String,
        required: true
    }, 
    venue:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Event", eventSchema);