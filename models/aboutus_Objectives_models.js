const mongoose = require("mongoose");

const aboutusObjectivesSchema = new mongoose.Schema({
    
    description:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("AboutusObjectives", aboutusObjectivesSchema);