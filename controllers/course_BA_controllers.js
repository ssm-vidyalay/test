const CourseBA = require("../models/course_BA_models");

// single getCourseBA
exports.getCourseBA = async (req, res, next) =>{
    const course_ba = await CourseBA.findById(req.params.id);
  res.status(200).json({
    success: true,
    data,
  });
}

// All getCourseBA
exports.getCourseBAAll = async (req, res, next) =>{
    const data= await CourseBA.find();
  res.status(200).json({
    success: true,
    data,
  });
}

// Add addCourseBA 
exports.addCourseBA = async (req, res) =>{
    const { subject } = req.body;
    const member = {
        subject: subject,
    }
    const data = await CourseBA.create(member);

    res.status(200).json({
        success: true,
        data,
    });
}

// Upadate upadateCourseBA
exports.updateCourseBA = async (req, res, next) =>{
  let data = await CourseBA.findById(req.params.id);

  subject = await CourseBA.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    data,
});
}

// delete deleteCourseBA
exports.deleteCourseBA = async(req, res, next) =>{

  let data = await CourseBA.findById(req.params.id);

  if(!data){
    return res.status(500).json({
      success:false,
      message:"subject not found"
    })
  }

  data = await CourseBA.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"subject is deleted successfully"
});

}