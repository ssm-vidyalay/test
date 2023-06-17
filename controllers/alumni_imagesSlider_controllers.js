const AlumniImagesSlider = require("../models/alumni_imagesSlider_models");

// single getAlumniImagesSlider
exports.getAlumniImagesSlider = async (req, res, next) =>{
    const alumni_imagesSlider = await AlumniImagesSlider.findById(req.params.id);
  res.status(200).json({
    success: true,
    alumni_imagesSlider,
  });
}

// All getAlumniImagesSlider
exports.getAlumniImagesSliderAll = async (req, res, next) =>{
    const alumni_imagesSlider = await AlumniImagesSlider.find();
  res.status(200).json({
    success: true,
    alumni_imagesSlider,
  });
}

// Add addAlumniImagesSlider 
exports.addAlumniImagesSlider = async (req, res) =>{
    const { images } = req.body;
    const member = {
        images: images,
    }
    const alumni_imagesSlider = await AlumniImagesSlider.create(member);

    res.status(200).json({
        success: true,
        alumni_imagesSlider,
    });
}

// Upadate upadateAlumniImagesSlider
exports.updateAlumniImagesSlider = async (req, res, next) =>{
  let alumni_imagesSlider = await AlumniImagesSlider.findById(req.params.id);

  alumni_imagesSlider = await AlumniImagesSlider.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    alumni_imagesSlider,
});
}

// delete deleteAlumniImagesSlider
exports.deleteAlumniImagesSlider = async(req, res, next) =>{

  let alumni_imagesSlider = await AlumniImagesSlider.findById(req.params.id);

  if(!alumni_imagesSlider){
    return res.status(500).json({
      success:false,
      message:"Alumni Images Slider not found"
    })
  }

  alumni_imagesSlider = await AlumniImagesSlider.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Alumni Images Slider is deleted successfully"
});

}