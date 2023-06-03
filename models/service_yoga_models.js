const mongoose = require("mongoose");

const serviceYogaSchema = new mongoose.Schema({
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

module.exports = mongoose.model("ServiceYoga", serviceYogaSchema);