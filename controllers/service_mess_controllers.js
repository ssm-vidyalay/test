const ServiceMess = require("../models/service_mess_models");

// single getServiceMess
exports.getServiceMess = async (req, res, next) =>{
    const facility = await ServiceMess.findById(req.params.id);
  res.status(200).json({
    success: true,
    facility,
  });
}

// All getServiceMess
exports.getServiceMessAll = async (req, res, next) =>{
    const facilities = await ServiceMess.find();
  res.status(200).json({
    success: true,
    facilities,
  });
}

// Add addServiceMess 
exports.addServiceMess = async (req, res) =>{
    const { name, description, imagesurl } = req.body;
    const member = {
        name: name,
        description: description,
        imagesurl: imagesurl,
    }
    // console.log(aboutus);
    const facility = await ServiceMess.create(member);

    res.status(200).json({
        success: true,
        facility,
    });
}

// Upadate upadateServiceMess
exports.updateServiceMess = async (req, res, next) =>{
  let facility = await ServiceMess.findById(req.params.id);

  facility = await ServiceMess.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    facility,
});
}

// delete deleteServiceMess
exports.deleteServiceMess = async(req, res, next) =>{

  let facility = await ServiceMess.findById(req.params.id);

  if(!facility){
    return res.status(500).json({
      success:false,
      message:"facility detail not found"
    })
  }

  facility = await ServiceMess.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"facility detail is deleted successfully"
});

}