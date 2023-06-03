const CourseMA = require("../models/course_MA_models");

// single getCourseMA
exports.getCourseMA = async (req, res, next) =>{
    const course_ma = await CourseMA.findById(req.params.id);
  res.status(200).json({
    success: true,
    course_ma,
  });
}

// All getCourseMA
exports.getCourseMAAll = async (req, res, next) =>{
    const course_ma = await CourseMA.find();
  res.status(200).json({
    success: true,
    course_ma,
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
  let course_ma = await CourseMA.findById(req.params.id);

  course_ma = await CourseMA.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    course_ma,
});
}

// delete deleteCourseMA
exports.deleteCourseMA = async(req, res, next) =>{

  let course_ma = await CourseMA.findById(req.params.id);

  if(!course_ma){
    return res.status(500).json({
      success:false,
      message:"subject not found"
    })
  }

  course_ma = await CourseMA.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"subject is deleted successfully"
});

}