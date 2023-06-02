const CourseMA = require("../models/course_MA_models");

// single getCourseMA
exports.getCourseMA = async (req, res, next) =>{
    const subject = await CourseMA.findById(req.params.id);
  res.status(200).json({
    success: true,
    subject,
  });
}

// All getCourseMA
exports.getCourseMAAll = async (req, res, next) =>{
    const subjects = await CourseMA.find();
  res.status(200).json({
    success: true,
    subjects,
  });
}

// Add addCourseMA 
exports.addCourseMA = async (req, res) =>{
    const { subject } = req.body;
    const member = {
        subject: subject,
    }
    const sub = await CourseMA.create(member);

    res.status(200).json({
        success: true,
        sub,
    });
}

// Upadate upadateCourseBA
exports.updateCourseMA = async (req, res, next) =>{
  let subject = await CourseMA.findById(req.params.id);

  subject = await CourseMA.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    subject,
});
}

// delete deleteCourseMA
exports.deleteCourseMA = async(req, res, next) =>{

  let subject = await CourseMA.findById(req.params.id);

  if(!subject){
    return res.status(500).json({
      success:false,
      message:"subject not found"
    })
  }

  subject = await CourseMA.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"subject is deleted successfully"
});

}