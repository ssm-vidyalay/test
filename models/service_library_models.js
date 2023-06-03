const mongoose = require("mongoose");

const serviceLibrarySchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    images:[
        {
            type:String,
            required:true
        }
    ],
});

module.exports = mongoose.model("ServiceLibrary", serviceLibrarySchema);