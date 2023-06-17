const mongoose = require("mongoose");

const alumniImagesSliderSchema = new mongoose.Schema({
    images:[
        {
            type:String,
            required:true
        }
    ],
    
});

module.exports = mongoose.model("AlumniImagesSlider", alumniImagesSliderSchema);