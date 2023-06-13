const mongoose = require("mongoose");

const alumniSpotlightSchema = new mongoose.Schema({
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
    profile:{
        type:String,
        required: true
    },
});

module.exports = mongoose.model("AlumniSpotlight", alumniSpotlightSchema);