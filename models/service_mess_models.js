const mongoose = require("mongoose");

const serviceMessSchema = new mongoose.Schema({
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

module.exports = mongoose.model("ServiceMess", serviceMessSchema);