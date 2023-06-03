const AlumniAbout = require("../models/alumni_about_models");

// single getAlumniAbout
exports.getAlumniAbout = async (req, res, next) =>{
    const alumni_about = await AlumniAbout.findById(req.params.id);
  res.status(200).json({
    success: true,
    alumni_about,
  });
}

// All getAlumniAbout
exports.getAlumniAboutAll = async (req, res, next) =>{
    const alumni_about = await AlumniAbout.find();
  res.status(200).json({
    success: true,
    alumni_about,
  });
}

// Add addAlumniAbout 
exports.addAlumniAbout = async (req, res) =>{
    const { title, description, imagesurl } = req.body;
    const member = {
        title: title,
        description: description,
        imagesurl: imagesurl,
    }
    const alumni_about = await AlumniAbout.create(member);

    res.status(200).json({
        success: true,
        alumni_about,
    });
}

// Upadate upadateAlumniAbout
exports.updateAlumniAbout = async (req, res, next) =>{
  let alumni_about = await AlumniAbout.findById(req.params.id);

  alumni_about = await AlumniAbout.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    alumni_about,
});
}

// delete deleteAlumniAbout
exports.deleteAlumniAbout = async(req, res, next) =>{

  let alumni_about = await AlumniAbout.findById(req.params.id);

  if(!alumni_about){
    return res.status(500).json({
      success:false,
      message:"alumni detail not found"
    })
  }

  alumni_about = await AlumniAbout.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"alumni detail is deleted successfully"
});

}