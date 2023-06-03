const AlumniGallery = require("../models/alumni_gallery_models");

// single getAlumniGallery
exports.getAlumniGallery = async (req, res, next) =>{
    const alumni_gallery = await AlumniGallery.findById(req.params.id);
  res.status(200).json({
    success: true,
    alumni_gallery,
  });
}

// All getAlumniGallery
exports.getAlumniGalleryAll = async (req, res, next) =>{
    const alumni_gallery = await AlumniGallery.find();
  res.status(200).json({
    success: true,
    alumni_gallery,
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
    const alumni_gallery = await AlumniGallery.create(member);

    res.status(200).json({
        success: true,
        alumni_gallery,
    });
}

// Upadate upadateAlumniGallery
exports.updateAlumniGallery = async (req, res, next) =>{
  let alumni_gallery = await AlumniGallery.findById(req.params.id);

  alumni_gallery = await AlumniGallery.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    alumni_gallery,
});
}

// delete deleteAlumniGallery
exports.deleteAlumniGallery = async(req, res, next) =>{

  let alumni_gallery = await AlumniGallery.findById(req.params.id);

  if(!alumni_gallery){
    return res.status(500).json({
      success:false,
      message:"alumni detail not found"
    })
  }

  alumni_gallery = await AlumniGallery.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"alumni detail is deleted successfully"
});

}