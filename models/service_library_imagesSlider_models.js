const mongoose = require("mongoose");

const serviceLibraryImagesSliderSchema = new mongoose.Schema({
    imageurl:
        {
            type:String,
            required:true
        }
});

module.exports = mongoose.model("ServiceLibraryImagesSlider", serviceLibraryImagesSliderSchema);