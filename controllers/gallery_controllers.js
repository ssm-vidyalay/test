const Gallery = require("../models/gallery_models");

// single getGallery
exports.getGallery = async (req, res, next) =>{
    const gallery = await Gallery.findById(req.params.id);
  res.status(200).json({
    success: true,
    gallery,
  });
}

// All getGallery
exports.getGalleryAll = async (req, res, next) =>{
    const gallery = await Gallery.find();
  res.status(200).json({
    success: true,
    gallery,
  });
}

// Add addGallery 
exports.addGallery = async (req, res) =>{
    const { date, description, imagesurl } = req.body;
    const member = {
        date: date,
        description: description,
        imagesurl: imagesurl,
    }
    const gallery = await Gallery.create(member);

    res.status(200).json({
        success: true,
        gallery,
    });
}

// Upadate upadateGallery
exports.updateGallery = async (req, res, next) =>{
  let gallery = await Gallery.findById(req.params.id);

  gallery = await Gallery.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    gallery,
});
}

// delete deleteGallery
exports.deleteGallery = async(req, res, next) =>{

  let gallery = await Gallery.findById(req.params.id);

  if(!gallery){
    return res.status(500).json({
      success:false,
      message:"Gallery detail not found"
    })
  }

  gallery = await Gallery.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Gallery detail is deleted successfully"
});

}