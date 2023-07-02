const mongoose = require("mongoose");

const serviceComputerLabImagesSliderSchema = new mongoose.Schema({
    imageurl:
        {
            type:String,
            required:true
        }
    
});

module.exports = mongoose.model("ServiceComputerLabImagesSlider", serviceComputerLabImagesSliderSchema);