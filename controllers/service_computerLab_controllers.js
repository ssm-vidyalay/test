const ServiceComputerLab = require("../models/service_computerLab_models");

// single getServiceComputerLab
exports.getServiceComputerLab = async (req, res, next) =>{
    const facility = await ServiceComputerLab.findById(req.params.id);
  res.status(200).json({
    success: true,
    facility,
  });
}

// All getServiceComputerLab
exports.getServiceComputerLabAll = async (req, res, next) =>{
    const facilities = await ServiceComputerLab.find();
  res.status(200).json({
    success: true,
    facilities,
  });
}

// Add addServiceComputerLab 
exports.addServiceComputerLab = async (req, res) =>{
    const { name, description, imagesurl } = req.body;
    const member = {
        name: name,
        description: description,
        imagesurl: imagesurl,
    }
    // console.log(aboutus);
    const facility = await ServiceComputerLab.create(member);

    res.status(200).json({
        success: true,
        facility,
    });
}

// Upadate upadateServiceComputerLab
exports.updateServiceComputerLab = async (req, res, next) =>{
  let facility = await ServiceComputerLab.findById(req.params.id);

  facility = await ServiceComputerLab.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    facility,
});
}

// delete deleteServiceComputerLab
exports.deleteServiceComputerLab = async(req, res, next) =>{

  let facility = await ServiceComputerLab.findById(req.params.id);

  if(!facility){
    return res.status(500).json({
      success:false,
      message:"facility detail not found"
    })
  }

  facility = await ServiceComputerLab.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"facility detail is deleted successfully"
});

}