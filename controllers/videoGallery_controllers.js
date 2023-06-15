const VideoGallery = require("../models/videoGallery_models");

// single getVideoGallery
exports.getVideoGallery = async (req, res, next) =>{
    const videoGallery = await VideoGallery.findById(req.params.id);
  res.status(200).json({
    success: true,
    videoGallery,
  });
}

// All getVideoGallery
exports.getVideoGalleryAll = async (req, res, next) =>{
    const videoGallery = await VideoGallery.find();
  res.status(200).json({
    success: true,
    videoGallery,
  });
}

// Add addVideoGallery 
exports.addVideoGallery = async (req, res) =>{
    const { videolink} = req.body;
    const member = {
        videolink: videolink
    }
    const videoGallery = await VideoGallery.create(member);

    res.status(200).json({
        success: true,
        videoGallery,
    });
}

// Upadate upadateVideoGallery
exports.updateVideoGallery = async (req, res, next) =>{
  let videoGallery = await VideoGallery.findById(req.params.id);

  videoGallery = await VideoGallery.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    videoGallery,
});
}

// delete deleteVideoGallery
exports.deleteVideoGallery = async(req, res, next) =>{

  let videoGallery = await VideoGallery.findById(req.params.id);

  if(!videoGallery){
    return res.status(500).json({
      success:false,
      message:"Video Gallery detail not found"
    })
  }

  videoGallery = await VideoGallery.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Video Gallery detail is deleted successfully"
});

}