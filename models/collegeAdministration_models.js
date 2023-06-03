const mongoose = require("mongoose");

const collegeAdministrationSchema = new mongoose.Schema({
    collegeAdministration:[
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
            designation:{
                type:String,
                required:true
            },
        }
    ]
});

module.exports = mongoose.model("CollegeAdministration", collegeAdministrationSchema);