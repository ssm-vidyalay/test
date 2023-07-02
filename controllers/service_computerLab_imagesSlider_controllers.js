const ServiceComputerLabImagesSlider = require("../models/service_computerLab_imagesSlider_models");

// single getServiceComputerLabImagesSlider
exports.getServiceComputerLabImagesSlider = async (req, res, next) =>{
    const service_computerLab_imagesSlider = await ServiceComputerLabImagesSlider.findById(req.params.id);
  res.status(200).json({
    success: true,
    service_computerLab_imagesSlider,
  });
}

// All getServiceComputerLabImagesSlider
exports.getServiceComputerLabImagesSliderAll = async (req, res, next) =>{
    const service_computerLab_imagesSlider = await ServiceComputerLabImagesSlider.find();
  res.status(200).json({
    success: true,
    service_computerLab_imagesSlider,
  });
}

// Add addServiceComputerLabImagesSlider 
exports.addServiceComputerLabImagesSlider = async (req, res) =>{
    const {  imageurl } = req.body;
    const member = {
        imageurl: imageurl,
    }
    // console.log(aboutus);
    const service_computerLab_imagesSlider = await ServiceComputerLabImagesSlider.create(member);

    res.status(200).json({
        success: true,
        service_computerLab_imagesSlider,
    });
}

// Upadate upadateServiceComputerLabImagesSlider
exports.updateServiceComputerLabImagesSlider = async (req, res, next) =>{
  let service_computerLab_imagesSlider = await ServiceComputerLabImagesSlider.findById(req.params.id);

  service_computerLab_imagesSlider = await ServiceComputerLabImagesSlider.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    service_computerLab_imagesSlider,
});
}

// delete deleteServiceComputerLabImagesSlider
exports.deleteServiceComputerLabImagesSlider = async(req, res, next) =>{

  let service_computerLab_imagesSlider = await ServiceComputerLabImagesSlider.findById(req.params.id);

  if(!service_computerLab_imagesSlider){
    return res.status(500).json({
      success:false,
      message:"Service Computer Lab images slider detail not found"
    })
  }

  service_computerLab_imagesSlider = await ServiceComputerLabImagesSlider.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Service Computer Lab images slider detail is deleted successfully"
});

}