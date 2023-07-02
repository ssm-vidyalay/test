const ServiceHostelImagesSlider = require("../models/service_hostel_imagesSlider_models");

// single getServiceHostelImagesSlider
exports.getServiceHostelImagesSlider = async (req, res, next) =>{
    const service_hostel_imagesSlider = await ServiceHostelImagesSlider.findById(req.params.id);
  res.status(200).json({
    success: true,
    service_hostel_imagesSlider,
  });
}

// All getServiceHostelImagesSlider
exports.getServiceHostelImagesSliderAll = async (req, res, next) =>{
    const service_hostel_imagesSlider = await ServiceHostelImagesSlider.find();
  res.status(200).json({
    success: true,
    service_hostel_imagesSlider,
  });
}

// Add addServiceHostelImagesSlider 
exports.addServiceHostelImagesSlider = async (req, res) =>{
    const { imageurl } = req.body;
    const member = {
        imageurl: imageurl,
    }
    // console.log(aboutus);
    const service_hostel_imagesSlider = await ServiceHostelImagesSlider.create(member);

    res.status(200).json({
        success: true,
        service_hostel_imagesSlider,
    });
}

// Upadate upadateServiceHostelImagesSlider
exports.updateServiceHostelImagesSlider = async (req, res, next) =>{
  let service_hostel_imagesSlider = await ServiceHostelImagesSlider.findById(req.params.id);

  service_hostel_imagesSlider = await ServiceHostelImagesSlider.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    service_hostel_imagesSlider,
});
}

// delete deleteServiceHostelImagesSlider
exports.deleteServiceHostelImagesSlider = async(req, res, next) =>{

  let service_hostel_imagesSlider = await ServiceHostelImagesSlider.findById(req.params.id);

  if(!service_hostel_imagesSlider){
    return res.status(500).json({
      success:false,
      message:"Service hostel images slider detail not found"
    })
  }

  service_hostel_imagesSlider = await ServiceHostelImagesSlider.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Service hostel images slider detail is deleted successfully"
});

}