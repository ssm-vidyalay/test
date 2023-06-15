const mongoose = require("mongoose");

const videoGallerySchema = new mongoose.Schema({
    videolink:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("VideoGallery", videoGallerySchema);