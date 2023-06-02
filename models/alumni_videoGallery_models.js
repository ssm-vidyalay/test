const mongoose = require("mongoose");

const alumniVideoGallerySchema = new mongoose.Schema({
    videolink:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("AlumniVideoGallery", alumniVideoGallerySchema);