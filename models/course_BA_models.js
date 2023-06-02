const mongoose = require("mongoose");

const courseBASchema = new mongoose.Schema({
    subject:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("CourseBA", courseBASchema);