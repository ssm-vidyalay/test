const mongoose = require("mongoose");

const aboutusAnnualReportSchema = new mongoose.Schema({
    
    description:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("AboutusAnnualReport", aboutusAnnualReportSchema);