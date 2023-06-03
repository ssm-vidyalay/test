const CourseBA = require("../models/course_BA_models");

// single getCourseBA
exports.getCourseBA = async (req, res, next) =>{
    const course_ba = await CourseBA.findById(req.params.id);
  res.status(200).json({
    success: true,
    course_ba,
  });
}

// All getCourseBA
exports.getCourseBAAll = async (req, res, next) =>{
    const course_ba = await CourseBA.find();
  res.status(200).json({
    success: true,
    course_ba,
  });
}

// Add addCourseBA 
exports.addCourseBA = async (req, res) =>{
    const { subject } = req.body;
    const member = {
        subject: subject,
    }
    const course_ba = await CourseBA.create(member);

    res.status(200).json({
        success: true,
        course_ba,
    });
}

// Upadate upadateCourseBA
exports.updateCourseBA = async (req, res, next) =>{
  let course_ba = await CourseBA.findById(req.params.id);

  subject = await CourseBA.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    course_ba,
});
}

// delete deleteCourseBA
exports.deleteCourseBA = async(req, res, next) =>{

  let course_ba = await CourseBA.findById(req.params.id);

  if(!course_ba){
    return res.status(500).json({
      success:false,
      message:"subject not found"
    })
  }

  course_ba = await CourseBA.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"subject is deleted successfully"
});

}