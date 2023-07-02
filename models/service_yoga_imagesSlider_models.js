const mongoose = require("mongoose");

const serviceYogaImagesSliderSchema = new mongoose.Schema({
    imageurl:
        {
            type:String,
            required:true
        }
});

module.exports = mongoose.model("ServiceYogaImagesSlider", serviceYogaImagesSliderSchema);