const HomeOnlineCourses = require("../models/home_onlineCourses_models");

// single getHomeOnlineCourses
exports.getHomeOnlineCourses = async (req, res, next) =>{
    const onlineCourse = await HomeOnlineCourses.findById(req.params.id);
  res.status(200).json({
    success: true,
    onlineCourse,
  });
}

// All getHomeOnlineCourses
exports.getHomeOnlineCoursesAll = async (req, res, next) =>{
    const onlineCourse = await HomeOnlineCourses.find();
  res.status(200).json({
    success: true,
    onlineCourse,
  });
}

// Add addHomeOnlineCourses 
exports.addHomeOnlineCourses = async (req, res) =>{
    const { title, description, imageurl, youtubeLink } = req.body;
    const member = {
        title: title,
        description: description,
        image: image,
        link: link
    }
    // console.log(aboutus);
    const onlineCourses = await HomeOnlineCourses.create(member);

    res.status(200).json({
        success: true,
        onlineCourses,
    });
}

// Upadate upadateHomeOnlineCourses
exports.updateHomeOnlineCourses = async (req, res, next) =>{
  let onlineCourse = await HomeOnlineCourses.findById(req.params.id);

  onlineCourse = await HomeOnlineCourses.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    onlineCourse,
});
}

// delete deleteHomeOnlineCourses
exports.deleteHomeOnlineCourses = async(req, res, next) =>{

  let onlineCourse = await HomeOnlineCourses.findById(req.params.id);

  if(!onlineCourse){
    return res.status(500).json({
      success:false,
      message:"Online Course detail not found"
    })
  }

  onlineCourse = await HomeOnlineCourses.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Online Course detail is deleted successfully"
});

}