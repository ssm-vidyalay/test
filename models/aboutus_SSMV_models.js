const mongoose = require("mongoose");

const aboutusSchema = new mongoose.Schema(
    {
    
    description:{
        type:String,
        required:true
    },
    imageurl:{
            type:String,
            required:true
        }
});

module.exports = mongoose.model("Aboutus", aboutusSchema);