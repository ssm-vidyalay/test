const AlumniGallery = require("../models/alumni_gallery_models");

// single getAlumniGallery
exports.getAlumniGallery = async (req, res, next) =>{
    const alumni = await AlumniGallery.findById(req.params.id);
  res.status(200).json({
    success: true,
    alumni,
  });
}

// All getAlumniGallery
exports.getAlumniGalleryAll = async (req, res, next) =>{
    const alumnis = await AlumniGallery.find();
  res.status(200).json({
    success: true,
    alumnis,
  });
}

// Add addAlumniGallery 
exports.addAlumniGallery = async (req, res) =>{
    const { date, description, imagesurl } = req.body;
    const member = {
        date: date,
        description: description,
        imagesurl: imagesurl,
    }
    const alumni = await AlumniGallery.create(member);

    res.status(200).json({
        success: true,
        alumni,
    });
}

// Upadate upadateAlumniGallery
exports.updateAlumniGallery = async (req, res, next) =>{
  let alumni = await AlumniGallery.findById(req.params.id);

  alumni = await AlumniGallery.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    alumni,
});
}

// delete deleteAlumniGallery
exports.deleteAlumniGallery = async(req, res, next) =>{

  let alumni = await AlumniGallery.findById(req.params.id);

  if(!alumni){
    return res.status(500).json({
      success:false,
      message:"alumni detail not found"
    })
  }

  alumni = await AlumniGallery.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"alumni detail is deleted successfully"
});

}