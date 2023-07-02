const ServiceLibraryImagesSlider = require("../models/service_library_imagesSlider_models");

// single getServiceLibraryImagesSlider
exports.getServiceLibraryImagesSlider = async (req, res, next) =>{
    const data = await ServiceLibraryImagesSlider.findById(req.params.id);
  res.status(200).json({
    success: true,
    data,
  });
}

// All getServiceLibraryImagesSlider
exports.getServiceLibraryImagesSliderAll = async (req, res, next) =>{
    const data = await ServiceLibraryImagesSlider.find();
  res.status(200).json({
    success: true,
    data,
  });
}

// Add addServiceLibraryImagesSlider 
exports.addServiceLibraryImagesSlider = async (req, res) =>{
    const { imageurl } = req.body;
    const member = {
        imageurl: imageurl,
    }
    // console.log(aboutus);
    const data = await ServiceLibraryImagesSlider.create(member);

    res.status(200).json({
        success: true,
        data,
    });
}

// Upadate upadateServiceLibraryImagesSlider
exports.updateServiceLibraryImagesSlider = async (req, res, next) =>{
  let data = await ServiceLibraryImagesSlider.findById(req.params.id);

  data = await ServiceLibraryImagesSlider.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    data,
});
}

// delete deleteServiceLibraryImagesSlider
exports.deleteServiceLibraryImagesSlider = async(req, res, next) =>{

  let data = await ServiceLibraryImagesSlider.findById(req.params.id);

  if(!data){
    return res.status(500).json({
      success:false,
      message:"Service library images slider detail not found"
    })
  }

  data = await ServiceLibraryImagesSlider.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Service library images slider detail is deleted successfully"
});

}