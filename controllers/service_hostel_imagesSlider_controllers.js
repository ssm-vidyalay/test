const ServiceHostelImagesSlider = require("../models/data_models");

// single getServiceHostelImagesSlider
exports.getServiceHostelImagesSlider = async (req, res, next) =>{
    const data = await ServiceHostelImagesSlider.findById(req.params.id);
  res.status(200).json({
    success: true,
    data,
  });
}

// All getServiceHostelImagesSlider
exports.getServiceHostelImagesSliderAll = async (req, res, next) =>{
    const data = await ServiceHostelImagesSlider.find();
  res.status(200).json({
    success: true,
    data,
  });
}

// Add addServiceHostelImagesSlider 
exports.addServiceHostelImagesSlider = async (req, res) =>{
    const { imageurl } = req.body;
    const member = {
        imageurl: imageurl,
    }
    // console.log(aboutus);
    const data = await ServiceHostelImagesSlider.create(member);

    res.status(200).json({
        success: true,
        data,
    });
}

// Upadate upadateServiceHostelImagesSlider
exports.updateServiceHostelImagesSlider = async (req, res, next) =>{
  let data = await ServiceHostelImagesSlider.findById(req.params.id);

  data = await ServiceHostelImagesSlider.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    data,
});
}

// delete deleteServiceHostelImagesSlider
exports.deleteServiceHostelImagesSlider = async(req, res, next) =>{

  let data = await ServiceHostelImagesSlider.findById(req.params.id);

  if(!data){
    return res.status(500).json({
      success:false,
      message:"Service hostel images slider detail not found"
    })
  }

  data = await ServiceHostelImagesSlider.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Service hostel images slider detail is deleted successfully"
});

}