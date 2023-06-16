const mongoose = require("mongoose");

const serviceYogaImagesSliderSchema = new mongoose.Schema({
    images:[
        {
            type:String,
            required:true
        }
    ],
});

module.exports = mongoose.model("ServiceYogaImagesSlider", serviceYogaImagesSliderSchema);