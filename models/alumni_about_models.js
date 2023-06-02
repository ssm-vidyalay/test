const mongoose = require("mongoose");

const alumniAboutSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    imagesurl:{
        type:String, 
        required:true
    }
});

module.exports = mongoose.model("AlumniAbout", alumniAboutSchema);