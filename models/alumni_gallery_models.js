const mongoose = require("mongoose");

const alumniGallerySchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    imagesurl:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model("AlumniGallery", alumniGallerySchema);