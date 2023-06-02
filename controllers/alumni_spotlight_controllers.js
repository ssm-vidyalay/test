const AlumniSpotlight = require("../models/alumni_spotlight_models");

// single getAlumniSpotlight
exports.getAlumniSpotlight = async (req, res, next) =>{
    const alumni = await AlumniSpotlight.findById(req.params.id);
  res.status(200).json({
    success: true,
    alumni,
  });
}

// All getAlumniSpotlight
exports.getAlumniSpotlightAll = async (req, res, next) =>{
    const alumnis = await AlumniSpotlight.find();
  res.status(200).json({
    success: true,
    alumnis,
  });
}

// Add addAlumniSpotlight 
exports.addAlumniSpotlight = async (req, res) =>{
    const { name, description, imagesurl } = req.body;
    const member = {
        name: name,
        description: description,
        imagesurl: imagesurl,
    }
    const alumni = await AlumniSpotlight.create(member);

    res.status(200).json({
        success: true,
        alumni,
    });
}

// Upadate upadateAlumniSpotlight
exports.updateAlumniSpotlight = async (req, res, next) =>{
  let alumni = await AlumniSpotlight.findById(req.params.id);

  alumni = await AlumniSpotlight.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    alumni,
});
}

// delete deleteAlumniSpotlight
exports.deleteAlumniSpotlight = async(req, res, next) =>{

  let alumni = await AlumniSpotlight.findById(req.params.id);

  if(!alumni){
    return res.status(500).json({
      success:false,
      message:"alumni detail not found"
    })
  }

  alumni = await AlumniSpotlight.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"alumni detail is deleted successfully"
});

}