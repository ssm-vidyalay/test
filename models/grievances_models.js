const mongoose = require("mongoose");

const grievancesSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type:String,
        required:true
    },
    grievance:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model("Grievances", grievancesSchema);