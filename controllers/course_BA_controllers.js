const CourseBA = require("../models/course_BA_models");

// single getCourseBA
exports.getCourseBA = async (req, res, next) =>{
    const subject = await CourseBA.findById(req.params.id);
  res.status(200).json({
    success: true,
    subject,
  });
}

// All getCourseBA
exports.getCourseBAAll = async (req, res, next) =>{
    const subjects = await CourseBA.find();
  res.status(200).json({
    success: true,
    subjects,
  });
}

// Add addCourseBA 
exports.addCourseBA = async (req, res) =>{
    const { subject } = req.body;
    const member = {
        subject: subject,
    }
    const sub = await CourseBA.create(member);

    res.status(200).json({
        success: true,
        sub,
    });
}

// Upadate upadateCourseBA
exports.updateCourseBA = async (req, res, next) =>{
  let subject = await CourseBA.findById(req.params.id);

  subject = await CourseBA.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    subject,
});
}

// delete deleteCourseBA
exports.deleteCourseBA = async(req, res, next) =>{

  let subject = await CourseBA.findById(req.params.id);

  if(!subject){
    return res.status(500).json({
      success:false,
      message:"subject not found"
    })
  }

  subject = await CourseBA.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"subject is deleted successfully"
});

}