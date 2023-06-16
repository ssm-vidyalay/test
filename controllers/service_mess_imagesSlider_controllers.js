const ServiceMessImagesSlider = require("../models/service_mess_imagesSlider_models");

// single getServiceMessImagesSlider
exports.getServiceMessImagesSlider = async (req, res, next) =>{
    const service_mess_imagesSlider = await ServiceMessImagesSlider.findById(req.params.id);
  res.status(200).json({
    success: true,
    service_mess_imagesSlider,
  });
}

// All getServiceMessImagesSlider
exports.getServiceMessImagesSliderAll = async (req, res, next) =>{
    const service_mess_imagesSlider = await ServiceMessImagesSlider.find();
  res.status(200).json({
    success: true,
    service_mess_imagesSlider,
  });
}

// Add addServiceMessImagesSlider 
exports.addServiceMessImagesSlider = async (req, res) =>{
    const { images } = req.body;
    const member = {
        images: images,
    }
    // console.log(aboutus);
    const service_mess_imagesSlider = await ServiceMessImagesSlider.create(member);

    res.status(200).json({
        success: true,
        service_mess_imagesSlider,
    });
}

// Upadate upadateServiceMessImagesSlider
exports.updateServiceMessImagesSlider = async (req, res, next) =>{
  let service_mess_imagesSlider = await ServiceMessImagesSlider.findById(req.params.id);

  service_mess_imagesSlider = await ServiceMessImagesSlider.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    service_mess_imagesSlider,
});
}

// delete deleteServiceMessImagesSlider
exports.deleteServiceMessImagesSlider = async(req, res, next) =>{

  let service_mess_imagesSlider = await ServiceMessImagesSlider.findById(req.params.id);

  if(!service_mess_imagesSlider){
    return res.status(500).json({
      success:false,
      message:"Service mess images slider detail not found"
    })
  }

  service_mess_imagesSlider = await ServiceMessImagesSlider.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Service mess images slider detail is deleted successfully"
});

}