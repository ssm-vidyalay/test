const mongoose = require("mongoose");

const serviceMessImagesSliderSchema = new mongoose.Schema({
    imageurl:
        {
            type:String,
            required:true
        }
});

module.exports = mongoose.model("ServiceMessImagesSlider", serviceMessImagesSliderSchema);