const mongoose = require("mongoose");

const homeOnlineCoursesSchema = new mongoose.Schema({
    title:{
        type:String, 
        required:true
    },
    description:{
        type:String, 
        required:true
    },
    imageurl:{
        type:String, 
        required:true
    },
    youtubeLink:{
        type:String, 
        required:true
    },
});

module.exports = mongoose.model("HomeOnlineCourses", homeOnlineCoursesSchema);