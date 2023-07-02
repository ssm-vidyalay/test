const ServiceMessImagesSlider = require("../models/service_mess_imagesSlider_models");

// single getServiceMessImagesSlider
exports.getServiceMessImagesSlider = async (req, res, next) =>{
    const data = await ServiceMessImagesSlider.findById(req.params.id);
  res.status(200).json({
    success: true,
    data,
  });
}

// All getServiceMessImagesSlider
exports.getServiceMessImagesSliderAll = async (req, res, next) =>{
    const data = await ServiceMessImagesSlider.find();
  res.status(200).json({
    success: true,
    data,
  });
}

// Add addServiceMessImagesSlider 
exports.addServiceMessImagesSlider = async (req, res) =>{
    const { imageurl } = req.body;
    const member = {
        imageurl: imageurl,
    }
    // console.log(aboutus);
    const data = await ServiceMessImagesSlider.create(member);

    res.status(200).json({
        success: true,
        data,
    });
}

// Upadate upadateServiceMessImagesSlider
exports.updateServiceMessImagesSlider = async (req, res, next) =>{
  let data = await ServiceMessImagesSlider.findById(req.params.id);

  data = await ServiceMessImagesSlider.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    data,
});
}

// delete deleteServiceMessImagesSlider
exports.deleteServiceMessImagesSlider = async(req, res, next) =>{

  let data = await ServiceMessImagesSlider.findById(req.params.id);

  if(!data){
    return res.status(500).json({
      success:false,
      message:"Service mess images slider detail not found"
    })
  }

  data = await ServiceMessImagesSlider.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Service mess images slider detail is deleted successfully"
});

}