const ServiceLibrary = require("../models/service_library_models");

// single getServiceLibrary
exports.getServiceLibrary = async (req, res, next) =>{
    const data = await ServiceLibrary.findById(req.params.id);
  res.status(200).json({
    success: true,
    data,
  });
}

// All getServiceLibrary
exports.getServiceLibraryAll = async (req, res, next) =>{
    const data = await ServiceLibrary.find();
  res.status(200).json({
    success: true,
    data,
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
    const data = await ServiceLibrary.create(member);

    res.status(200).json({
        success: true,
        data,
    });
}

// Upadate upadateServiceLibrary
exports.updateServiceLibrary = async (req, res, next) =>{
  let data = await ServiceLibrary.findById(req.params.id);

  data = await ServiceLibrary.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    data,
});
}

// delete deleteServiceLibrary
exports.deleteServiceLibrary = async(req, res, next) =>{

  let data = await ServiceLibrary.findById(req.params.id);

  if(!data){
    return res.status(500).json({
      success:false,
      message:"Service library detail not found"
    })
  }

  data = await ServiceLibrary.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Service library detail is deleted successfully"
});

}