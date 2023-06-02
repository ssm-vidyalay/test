const AlumniVideoGallery = require("../models/alumni_videoGallery_models");

// single getAlumniVideoGallery
exports.getAlumniVideoGallery = async (req, res, next) =>{
    const alumni = await AlumniVideoGallery.findById(req.params.id);
  res.status(200).json({
    success: true,
    alumni,
  });
}

// All getAlumniVideoGallery
exports.getAlumniVideoGalleryAll = async (req, res, next) =>{
    const alumnis = await AlumniVideoGallery.find();
  res.status(200).json({
    success: true,
    alumnis,
  });
}

// Add addAlumniVideoGallery 
exports.addAlumniVideoGallery = async (req, res) =>{
    const { videolink} = req.body;
    const member = {
        videolink: videolink
    }
    const alumni = await AlumniVideoGallery.create(member);

    res.status(200).json({
        success: true,
        alumni,
    });
}

// Upadate upadateAlumniVideoGallery
exports.updateAlumniVideoGallery = async (req, res, next) =>{
  let alumni = await AlumniVideoGallery.findById(req.params.id);

  alumni = await AlumniVideoGallery.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    alumni,
});
}

// delete deleteAlumniVideoGallery
exports.deleteAlumniVideoGallery = async(req, res, next) =>{

  let alumni = await AlumniVideoGallery.findById(req.params.id);

  if(!alumni){
    return res.status(500).json({
      success:false,
      message:"alumni detail not found"
    })
  }

  alumni = await AlumniVideoGallery.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"alumni detail is deleted successfully"
});

}