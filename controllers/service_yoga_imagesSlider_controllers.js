const ServiceYogaImagesSlider = require("../models/service_yoga_imagesSlider_models");

// single getServiceYogaImagesSlider
exports.getServiceYogaImagesSlider = async (req, res, next) =>{
    const service_yoga_imagesSlider = await ServiceYogaImagesSlider.findById(req.params.id);
  res.status(200).json({
    success: true,
    service_yoga_imagesSlider,
  });
}

// All getServiceYogaImagesSlider
exports.getServiceYogaImagesSliderAll = async (req, res, next) =>{
    const service_yoga_imagesSlider = await ServiceYogaImagesSlider.find();
  res.status(200).json({
    success: true,
    service_yoga_imagesSlider,
  });
}

// Add addServiceYogaImagesSlider 
exports.addServiceYogaImagesSlider = async (req, res) =>{
    const { imageurl } = req.body;
    const member = {
        imageurl: imageurl,
    }
    // console.log(aboutus);
    const service_yoga_imagesSlider = await ServiceYogaImagesSlider.create(member);

    res.status(200).json({
        success: true,
        service_yoga_imagesSlider,
    });
}

// Upadate upadateServiceYogaImagesSlider
exports.updateServiceYogaImagesSlider = async (req, res, next) =>{
  let service_yoga_imagesSlider = await ServiceYogaImagesSlider.findById(req.params.id);

  service_yoga_imagesSlider = await ServiceYogaImagesSlider.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    service_yoga_imagesSlider,
});
}

// delete deleteServiceYogaImagesSlider
exports.deleteServiceYogaImagesSlider = async(req, res, next) =>{

  let service_yoga_imagesSlider = await ServiceYogaImagesSlider.findById(req.params.id);

  if(!service_yoga_imagesSlider){
    return res.status(500).json({
      success:false,
      message:"Service yoga images slider detail not found"
    })
  }

  service_yoga_imagesSlider = await ServiceYogaImagesSlider.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Service yoga images slider detail is deleted successfully"
});

}