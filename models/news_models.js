const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    news:[
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

module.exports = mongoose.model("News", newsSchema);