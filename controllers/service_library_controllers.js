const ServiceLibrary = require("../models/service_library_models");

// single getServiceLibrary
exports.getServiceLibrary = async (req, res, next) =>{
    const service_library = await ServiceLibrary.findById(req.params.id);
  res.status(200).json({
    success: true,
    service_library,
  });
}

// All getServiceLibrary
exports.getServiceLibraryAll = async (req, res, next) =>{
    const service_library = await ServiceLibrary.find();
  res.status(200).json({
    success: true,
    service_library,
  });
}

// Add addServiceLibrary 
exports.addServiceLibrary = async (req, res) =>{
    const { description, images } = req.body;
    const member = {
        description: description,
        images: images,
    }
    // console.log(aboutus);
    const service_library = await ServiceLibrary.create(member);

    res.status(200).json({
        success: true,
        service_library,
    });
}

// Upadate upadateServiceLibrary
exports.updateServiceLibrary = async (req, res, next) =>{
  let service_library = await ServiceLibrary.findById(req.params.id);

  service_library = await ServiceLibrary.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    service_library,
});
}

// delete deleteServiceLibrary
exports.deleteServiceLibrary = async(req, res, next) =>{

  let service_library = await ServiceLibrary.findById(req.params.id);

  if(!service_library){
    return res.status(500).json({
      success:false,
      message:"Service library detail not found"
    })
  }

  service_library = await ServiceLibrary.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Service library detail is deleted successfully"
});

}