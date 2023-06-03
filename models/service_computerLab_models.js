const mongoose = require("mongoose");

const serviceComputerLabSchema = new mongoose.Schema({
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

module.exports = mongoose.model("ServiceComputerLab", serviceComputerLabSchema);