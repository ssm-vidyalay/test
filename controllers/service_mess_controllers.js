const ServiceMess = require("../models/service_mess_models");

// single getServiceMess
exports.getServiceMess = async (req, res, next) =>{
    const service_mess = await ServiceMess.findById(req.params.id);
  res.status(200).json({
    success: true,
    service_mess,
  });
}

// All getServiceMess
exports.getServiceMessAll = async (req, res, next) =>{
    const service_mess = await ServiceMess.find();
  res.status(200).json({
    success: true,
    service_mess,
  });
}

// Add addServiceMess 
exports.addServiceMess = async (req, res) =>{
    const { description, images } = req.body;
    const member = {
        description: description,
        images: images,
    }
    // console.log(aboutus);
    const service_mess = await ServiceMess.create(member);

    res.status(200).json({
        success: true,
        service_mess,
    });
}

// Upadate upadateServiceMess
exports.updateServiceMess = async (req, res, next) =>{
  let service_mess = await ServiceMess.findById(req.params.id);

  service_mess = await ServiceMess.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    service_mess,
});
}

// delete deleteServiceMess
exports.deleteServiceMess = async(req, res, next) =>{

  let service_mess = await ServiceMess.findById(req.params.id);

  if(!service_mess){
    return res.status(500).json({
      success:false,
      message:"Service mess detail not found"
    })
  }

  service_mess = await ServiceMess.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Service mess detail is deleted successfully"
});

}