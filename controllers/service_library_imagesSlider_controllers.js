const ServiceLibraryImagesSlider = require("../models/service_library_imagesSlider_models");

// single getServiceLibraryImagesSlider
exports.getServiceLibraryImagesSlider = async (req, res, next) =>{
    const service_library_imagesSlider = await ServiceLibraryImagesSlider.findById(req.params.id);
  res.status(200).json({
    success: true,
    service_library_imagesSlider,
  });
}

// All getServiceLibraryImagesSlider
exports.getServiceLibraryImagesSliderAll = async (req, res, next) =>{
    const service_library_imagesSlider = await ServiceLibraryImagesSlider.find();
  res.status(200).json({
    success: true,
    service_library_imagesSlider,
  });
}

// Add addServiceLibraryImagesSlider 
exports.addServiceLibraryImagesSlider = async (req, res) =>{
    const { images } = req.body;
    const member = {
        images: images,
    }
    // console.log(aboutus);
    const service_library_imagesSlider = await ServiceLibraryImagesSlider.create(member);

    res.status(200).json({
        success: true,
        service_library_imagesSlider,
    });
}

// Upadate upadateServiceLibraryImagesSlider
exports.updateServiceLibraryImagesSlider = async (req, res, next) =>{
  let service_library_imagesSlider = await ServiceLibraryImagesSlider.findById(req.params.id);

  service_library_imagesSlider = await ServiceLibraryImagesSlider.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    service_library_imagesSlider,
});
}

// delete deleteServiceLibraryImagesSlider
exports.deleteServiceLibraryImagesSlider = async(req, res, next) =>{

  let service_library_imagesSlider = await ServiceLibraryImagesSlider.findById(req.params.id);

  if(!service_library_imagesSlider){
    return res.status(500).json({
      success:false,
      message:"Service library images slider detail not found"
    })
  }

  service_library_imagesSlider = await ServiceLibraryImagesSlider.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Service library images slider detail is deleted successfully"
});

}