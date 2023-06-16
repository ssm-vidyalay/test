const mongoose = require("mongoose");

const homeAboutSchema = new mongoose.Schema({
            image:{
                type:String,
                required:true
            },
            description:{
                type:String,
                required:true
            },
});

module.exports = mongoose.model("homeAbout", homeAboutSchema);