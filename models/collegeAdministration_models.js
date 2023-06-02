const mongoose = require("mongoose");

const collegeAdministrationSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    imagesurl:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model("CollegeAdministration", collegeAdministrationSchema);