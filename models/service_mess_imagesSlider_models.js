const mongoose = require("mongoose");

const serviceMessImagesSliderSchema = new mongoose.Schema({
    images:[
        {
            type:String,
            required:true
        }
    ],
});

module.exports = mongoose.model("ServiceMessImagesSlider", serviceMessImagesSliderSchema);