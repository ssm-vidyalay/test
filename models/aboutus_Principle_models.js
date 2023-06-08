const mongoose = require("mongoose");

const aboutusPrincipleSchema = new mongoose.Schema({
  
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
            
});

module.exports = mongoose.model("AboutusPrinciple", aboutusPrincipleSchema);