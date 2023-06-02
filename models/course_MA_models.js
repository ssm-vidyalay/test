const mongoose = require("mongoose");

const courseMASchema = new mongoose.Schema({
    subject:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("CourseMA", courseMASchema);