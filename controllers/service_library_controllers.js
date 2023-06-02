const ServiceLibrary = require("../models/service_library_models");

// single getServiceLibrary
exports.getServiceLibrary = async (req, res, next) =>{
    const facility = await ServiceLibrary.findById(req.params.id);
  res.status(200).json({
    success: true,
    facility,
  });
}

// All getServiceLibrary
exports.getServiceLibraryAll = async (req, res, next) =>{
    const facilities = await ServiceLibrary.find();
  res.status(200).json({
    success: true,
    facilities,
  });
}

// Add addServiceLibrary 
exports.addServiceLibrary = async (req, res) =>{
    const { name, description, imagesurl } = req.body;
    const member = {
        name: name,
        description: description,
        imagesurl: imagesurl,
    }
    // console.log(aboutus);
    const facility = await ServiceLibrary.create(member);

    res.status(200).json({
        success: true,
        facility,
    });
}

// Upadate upadateServiceLibrary
exports.updateServiceLibrary = async (req, res, next) =>{
  let facility = await ServiceLibrary.findById(req.params.id);

  facility = await ServiceLibrary.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    facility,
});
}

// delete deleteServiceLibrary
exports.deleteServiceLibrary = async(req, res, next) =>{

  let facility = await ServiceLibrary.findById(req.params.id);

  if(!facility){
    return res.status(500).json({
      success:false,
      message:"facility detail not found"
    })
  }

  facility = await ServiceLibrary.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"facility detail is deleted successfully"
});

}