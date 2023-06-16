const mongoose = require("mongoose");

const serviceLibraryImagesSliderSchema = new mongoose.Schema({
    images:[
        {
            type:String,
            required:true
        }
    ],
});

module.exports = mongoose.model("ServiceLibraryImagesSlider", serviceLibraryImagesSliderSchema);