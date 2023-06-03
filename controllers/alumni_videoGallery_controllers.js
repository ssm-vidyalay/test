const AlumniVideoGallery = require("../models/alumni_videoGallery_models");

// single getAlumniVideoGallery
exports.getAlumniVideoGallery = async (req, res, next) =>{
    const alumni_videoGallery = await AlumniVideoGallery.findById(req.params.id);
  res.status(200).json({
    success: true,
    alumni_videoGallery,
  });
}

// All getAlumniVideoGallery
exports.getAlumniVideoGalleryAll = async (req, res, next) =>{
    const alumni_videoGallery = await AlumniVideoGallery.find();
  res.status(200).json({
    success: true,
    alumni_videoGallery,
  });
}

// Add addAlumniVideoGallery 
exports.addAlumniVideoGallery = async (req, res) =>{
    const { videolink} = req.body;
    const member = {
        videolink: videolink
    }
    const alumni_videoGallery = await AlumniVideoGallery.create(member);

    res.status(200).json({
        success: true,
        alumni_videoGallery,
    });
}

// Upadate upadateAlumniVideoGallery
exports.updateAlumniVideoGallery = async (req, res, next) =>{
  let alumni_videoGallery = await AlumniVideoGallery.findById(req.params.id);

  alumni_videoGallery = await AlumniVideoGallery.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    alumni_videoGallery,
});
}

// delete deleteAlumniVideoGallery
exports.deleteAlumniVideoGallery = async(req, res, next) =>{

  let alumni_videoGallery = await AlumniVideoGallery.findById(req.params.id);

  if(!alumni_videoGallery){
    return res.status(500).json({
      success:false,
      message:"alumni detail not found"
    })
  }

  alumni_videoGallery = await AlumniVideoGallery.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"alumni detail is deleted successfully"
});

}