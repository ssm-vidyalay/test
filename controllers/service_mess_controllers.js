const ServiceMess = require("../models/service_mess_models");

// single getServiceMess
exports.getServiceMess = async (req, res, next) =>{
    const data = await ServiceMess.findById(req.params.id);
  res.status(200).json({
    success: true,
    data,
  });
}

// All getServiceMess
exports.getServiceMessAll = async (req, res, next) =>{
    const data = await ServiceMess.find();
  res.status(200).json({
    success: true,
    data,
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
    const data = await ServiceMess.create(member);

    res.status(200).json({
        success: true,
        data,
    });
}

// Upadate upadateServiceMess
exports.updateServiceMess = async (req, res, next) =>{
  let data = await ServiceMess.findById(req.params.id);

  data = await ServiceMess.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    data,
});
}

// delete deleteServiceMess
exports.deleteServiceMess = async(req, res, next) =>{

  let data = await ServiceMess.findById(req.params.id);

  if(!data){
    return res.status(500).json({
      success:false,
      message:"Service mess detail not found"
    })
  }

  data = await ServiceMess.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Service mess detail is deleted successfully"
});

}