const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    group:[
        {
            name:{
                type:String,
                required:true
            },
            designation:{
                type:String,
                required:true
            },
            designation:{
                type:String,
                required:true
            },
        }
    ]
});

module.exports = mongoose.model("Group", groupSchema);