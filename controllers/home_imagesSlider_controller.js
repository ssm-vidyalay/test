const HomeImagesSlider = require("../models/home_imagesSlider_models");

// single getHomeImagesSlider
exports.getHomeImagesSlider = async (req, res, next) =>{
    const data = await HomeImagesSlider.findById(req.params.id);
  res.status(200).json({
    success: true,
    data,
  });
}

// All getHomeImagesSlider
exports.getHomeImagesSliderAll = async (req, res, next) =>{
    const data = await HomeImagesSlider.find();
  res.status(200).json({
    success: true,
    data,
  });
}

// Add addHomeImagesSlider 
exports.addHomeImagesSlider = async (req, res) =>{
    const { imageurl } = req.body;
    const member = {
        imageurl: imageurl,
    }
    // console.log(aboutus);
    const data = await HomeImagesSlider.create(member);

    res.status(200).json({
        success: true,
        data,
    });
}

// Upadate upadateHomeImagesSlider
exports.updateHomeImagesSlider = async (req, res, next) =>{
  let data = await HomeImagesSlider.findById(req.params.id);

  data = await HomeImagesSlider.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    data,
});
}

// delete deleteHomeImagesSlider
exports.deleteHomeImagesSlider = async(req, res, next) =>{

  let data = await HomeImagesSlider.findById(req.params.id);

  if(!data){
    return res.status(500).json({
      success:false,
      message:"Service hostel images slider detail not found"
    })
  }

  data = await HomeImagesSlider.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Service hostel images slider detail is deleted successfully"
});

}