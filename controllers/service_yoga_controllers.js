const ServiceYoga = require("../models/service_yoga_models");

// single getServiceYoga
exports.getServiceYoga = async (req, res, next) =>{
    const facility = await ServiceYoga.findById(req.params.id);
  res.status(200).json({
    success: true,
    facility,
  });
}

// All getServiceYoga
exports.getServiceYogaAll = async (req, res, next) =>{
    const facilities = await ServiceYoga.find();
  res.status(200).json({
    success: true,
    facilities,
  });
}

// Add addServiceYoga 
exports.addServiceYoga = async (req, res) =>{
    const { name, description, imagesurl } = req.body;
    const member = {
        name: name,
        description: description,
        imagesurl: imagesurl,
    }
    // console.log(aboutus);
    const facility = await ServiceYoga.create(member);

    res.status(200).json({
        success: true,
        facility,
    });
}

// Upadate upadateServiceYoga
exports.updateServiceYoga = async (req, res, next) =>{
  let facility = await ServiceYoga.findById(req.params.id);

  facility = await ServiceYoga.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    facility,
});
}

// delete deleteServiceYoga
exports.deleteServiceYoga = async(req, res, next) =>{

  let facility = await ServiceYoga.findById(req.params.id);

  if(!facility){
    return res.status(500).json({
      success:false,
      message:"facility detail not found"
    })
  }

  facility = await ServiceYoga.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"facility detail is deleted successfully"
});

}