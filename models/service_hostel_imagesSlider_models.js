const mongoose = require("mongoose");

const serviceHostelImagesSliderSchema = new mongoose.Schema({
    imageurl:
        {
            type:String,
            required:true
        }
});

module.exports = mongoose.model("ServiceHostelImagesSlider", serviceHostelImagesSliderSchema);