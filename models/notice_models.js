const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
            date:{
                type: Date,
                required: true
            },
            description:{
                type:String,
                required:true
            },
            imageurl:{
                type: String,
                required: true
            },
});

module.exports = mongoose.model("Notice", noticeSchema);