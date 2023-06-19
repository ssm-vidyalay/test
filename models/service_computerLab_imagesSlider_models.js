const mongoose = require("mongoose");

const serviceComputerLabImagesSliderSchema = new mongoose.Schema({
    images:
        {
            type:String,
            required:true
        }
    
});

module.exports = mongoose.model("ServiceComputerLabImagesSlider", serviceComputerLabImagesSliderSchema);