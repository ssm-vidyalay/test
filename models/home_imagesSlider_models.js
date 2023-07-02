const mongoose = require("mongoose");

const homeImagesSliderSchema = new mongoose.Schema({
    imageurl:
        {
            type:String,
            required:true
        }
});

module.exports = mongoose.model("HomeImagesSlider", homeImagesSliderSchema);