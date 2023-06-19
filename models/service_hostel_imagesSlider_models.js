const mongoose = require("mongoose");

const serviceHostelImagesSliderSchema = new mongoose.Schema({
    images:
        {
            type:String,
            required:true
        }
});

module.exports = mongoose.model("ServiceHostelImagesSlider", serviceHostelImagesSliderSchema);