const mongoose = require("mongoose");

const alumniTestinomialSchema = new mongoose.Schema({
    title:{
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

module.exports = mongoose.model("alumniTestinomial", alumniTestinomialSchema);