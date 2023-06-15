const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    imagesurl:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model("Gallery", gallerySchema);