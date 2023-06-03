const mongoose = require("mongoose");

const serviceHostelSchema = new mongoose.Schema({
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

module.exports = mongoose.model("ServiceHostel", serviceHostelSchema);