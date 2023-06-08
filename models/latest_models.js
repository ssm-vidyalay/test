const mongoose = require("mongoose");

const latestSchema = new mongoose.Schema({
    latest:[
        {
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
        }
    ]
});

module.exports = mongoose.model("latest", latestSchema);