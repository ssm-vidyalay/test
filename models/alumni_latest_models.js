const mongoose = require("mongoose");

const alumniLatestSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    imagesurl:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model("AlumniLatest", alumniLatestSchema);