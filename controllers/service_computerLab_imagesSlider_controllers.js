const ServiceComputerLabImagesSlider = require("../models/service_computerLab_imagesSlider_models");

// single getServiceComputerLabImagesSlider
exports.getServiceComputerLabImagesSlider = async (req, res, next) =>{
    const data = await ServiceComputerLabImagesSlider.findById(req.params.id);
  res.status(200).json({
    success: true,
    data,
  });
}

// All getServiceComputerLabImagesSlider
exports.getServiceComputerLabImagesSliderAll = async (req, res, next) =>{
    const data = await ServiceComputerLabImagesSlider.find();
  res.status(200).json({
    success: true,
    data,
  });
}

// Add addServiceComputerLabImagesSlider 
exports.addServiceComputerLabImagesSlider = async (req, res) =>{
    const {  imageurl } = req.body;
    const member = {
        imageurl: imageurl,
    }
    // console.log(aboutus);
    const data = await ServiceComputerLabImagesSlider.create(member);

    res.status(200).json({
        success: true,
        data,
    });
}

// Upadate upadateServiceComputerLabImagesSlider
exports.updateServiceComputerLabImagesSlider = async (req, res, next) =>{
  let data = await ServiceComputerLabImagesSlider.findById(req.params.id);

  data = await ServiceComputerLabImagesSlider.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    data,
});
}

// delete deleteServiceComputerLabImagesSlider
exports.deleteServiceComputerLabImagesSlider = async(req, res, next) =>{

  let data = await ServiceComputerLabImagesSlider.findById(req.params.id);

  if(!data){
    return res.status(500).json({
      success:false,
      message:"Service Computer Lab images slider detail not found"
    })
  }

  data = await ServiceComputerLabImagesSlider.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Service Computer Lab images slider detail is deleted successfully"
});

}