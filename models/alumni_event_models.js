const mongoose = require("mongoose");

const alumniEventSchema = new mongoose.Schema({
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

module.exports = mongoose.model("AlumniEvent", alumniEventSchema);