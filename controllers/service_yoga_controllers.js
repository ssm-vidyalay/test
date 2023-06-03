const ServiceYoga = require("../models/service_yoga_models");

// single getServiceYoga
exports.getServiceYoga = async (req, res, next) =>{
    const service_yoga = await ServiceYoga.findById(req.params.id);
  res.status(200).json({
    success: true,
    service_yoga,
  });
}

// All getServiceYoga
exports.getServiceYogaAll = async (req, res, next) =>{
    const service_yoga = await ServiceYoga.find();
  res.status(200).json({
    success: true,
    service_yoga,
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
    const service_yoga = await ServiceYoga.create(member);

    res.status(200).json({
        success: true,
        service_yoga,
    });
}

// Upadate upadateServiceYoga
exports.updateServiceYoga = async (req, res, next) =>{
  let service_yoga = await ServiceYoga.findById(req.params.id);

  service_yoga = await ServiceYoga.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    service_yoga,
});
}

// delete deleteServiceYoga
exports.deleteServiceYoga = async(req, res, next) =>{

  let service_yoga = await ServiceYoga.findById(req.params.id);

  if(!service_yoga){
    return res.status(500).json({
      success:false,
      message:"Service yoga detail not found"
    })
  }

  service_yoga = await ServiceYoga.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Service yoga detail is deleted successfully"
});

}