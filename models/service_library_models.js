const mongoose = require("mongoose");

const serviceLibrarySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    imagesurl:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model("ServiceLibrary", serviceLibrarySchema);