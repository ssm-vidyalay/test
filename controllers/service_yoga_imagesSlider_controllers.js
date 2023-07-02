const ServiceYogaImagesSlider = require("../models/service_yoga_imagesSlider_models");

// single getServiceYogaImagesSlider
exports.getServiceYogaImagesSlider = async (req, res, next) =>{
    const data = await ServiceYogaImagesSlider.findById(req.params.id);
  res.status(200).json({
    success: true,
    data,
  });
}

// All getServiceYogaImagesSlider
exports.getServiceYogaImagesSliderAll = async (req, res, next) =>{
    const data = await ServiceYogaImagesSlider.find();
  res.status(200).json({
    success: true,
    data,
  });
}

// Add addServiceYogaImagesSlider 
exports.addServiceYogaImagesSlider = async (req, res) =>{
    const { imageurl } = req.body;
    const member = {
        imageurl: imageurl,
    }
    // console.log(aboutus);
    const data = await ServiceYogaImagesSlider.create(member);

    res.status(200).json({
        success: true,
        data,
    });
}

// Upadate upadateServiceYogaImagesSlider
exports.updateServiceYogaImagesSlider = async (req, res, next) =>{
  let data = await ServiceYogaImagesSlider.findById(req.params.id);

  data = await ServiceYogaImagesSlider.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    data,
});
}

// delete deleteServiceYogaImagesSlider
exports.deleteServiceYogaImagesSlider = async(req, res, next) =>{

  let data = await ServiceYogaImagesSlider.findById(req.params.id);

  if(!data){
    return res.status(500).json({
      success:false,
      message:"Service yoga images slider detail not found"
    })
  }

  data = await ServiceYogaImagesSlider.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Service yoga images slider detail is deleted successfully"
});

}