const mongoose = require("mongoose");

const managingCommitteeSchema = new mongoose.Schema({
    managingCommittee:[
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

module.exports = mongoose.model("ManangingCommittee", managingCommitteeSchema);