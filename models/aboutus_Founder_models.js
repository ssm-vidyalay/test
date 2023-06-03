const mongoose = require("mongoose");

const aboutusFounderSchema = new mongoose.Schema({
    
    founder:[
        {
            name:{
                type:String,
                required:true
            },
            image:{
                type:String,
                required:true
            },
            designation:{
                type:String,
                required:true
            },
            description:{
                type:String,
                required:true
            },
            
        },
    ],
});

module.exports = mongoose.model("AboutusFounder", aboutusFounderSchema);