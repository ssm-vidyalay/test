const AlumniSpotlight = require("../models/alumni_spotlight_models");

// single getAlumniSpotlight
exports.getAlumniSpotlight = async (req, res, next) =>{
    const alumni_spotlight = await AlumniSpotlight.findById(req.params.id);
  res.status(200).json({
    success: true,
    alumni_spotlight,
  });
}

// All getAlumniSpotlight
exports.getAlumniSpotlightAll = async (req, res, next) =>{
    const alumni_spotlight = await AlumniSpotlight.find();
  res.status(200).json({
    success: true,
    alumni_spotlight,
  });
}

// Add addAlumniSpotlight 
exports.addAlumniSpotlight = async (req, res) =>{
    const { name, description, imagesurl, profile } = req.body;
    const member = {
        name: name,
        description: description,
        imagesurl: imagesurl,
        profile: profile
    }
    const alumni_spotlight = await AlumniSpotlight.create(member);

    res.status(200).json({
        success: true,
        alumni_spotlight,
    });
}

// Upadate upadateAlumniSpotlight
exports.updateAlumniSpotlight = async (req, res, next) =>{
  let alumni_spotlight = await AlumniSpotlight.findById(req.params.id);

  alumni_spotlight = await AlumniSpotlight.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    alumni_spotlight,
});
}

// delete deleteAlumniSpotlight
exports.deleteAlumniSpotlight = async(req, res, next) =>{

  let alumni_spotlight = await AlumniSpotlight.findById(req.params.id);

  if(!alumni_spotlight){
    return res.status(500).json({
      success:false,
      message:"alumni detail not found"
    })
  }

  alumni_spotlight = await AlumniSpotlight.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"alumni detail is deleted successfully"
});

}