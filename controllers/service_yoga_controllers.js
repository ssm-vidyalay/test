const ServiceYoga = require("../models/service_yoga_models");

// single getServiceYoga
exports.getServiceYoga = async (req, res, next) =>{
    const data = await ServiceYoga.findById(req.params.id);
  res.status(200).json({
    success: true,
    data,
  });
}

// All getServiceYoga
exports.getServiceYogaAll = async (req, res, next) =>{
    const data = await ServiceYoga.find();
  res.status(200).json({
    success: true,
    data,
  });
}

// Add addServiceYoga 
exports.addServiceYoga = async (req, res) =>{
    const { description, images } = req.body;
    const member = {
        description: description,
        images: images,
    }
    // console.log(aboutus);
    const data = await ServiceYoga.create(member);

    res.status(200).json({
        success: true,
        data,
    });
}

// Upadate upadateServiceYoga
exports.updateServiceYoga = async (req, res, next) =>{
  let data = await ServiceYoga.findById(req.params.id);

  data = await ServiceYoga.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    data,
});
}

// delete deleteServiceYoga
exports.deleteServiceYoga = async(req, res, next) =>{

  let data = await ServiceYoga.findById(req.params.id);

  if(!data){
    return res.status(500).json({
      success:false,
      message:"Service yoga detail not found"
    })
  }

  data = await ServiceYoga.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Service yoga detail is deleted successfully"
});

}