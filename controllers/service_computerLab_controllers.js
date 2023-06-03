const ServiceComputerLab = require("../models/service_computerLab_models");

// single getServiceComputerLab
exports.getServiceComputerLab = async (req, res, next) =>{
    const service_computerlab = await ServiceComputerLab.findById(req.params.id);
  res.status(200).json({
    success: true,
    service_computerlab,
  });
}

// All getServiceComputerLab
exports.getServiceComputerLabAll = async (req, res, next) =>{
    const service_computerlab = await ServiceComputerLab.find();
  res.status(200).json({
    success: true,
    service_computerlab,
  });
}

// Add addServiceComputerLab 
exports.addServiceComputerLab = async (req, res) =>{
    const { description, images } = req.body;
    const member = {
        description: description,
        images: images,
    }
    // console.log(aboutus);
    const service_computerlab = await ServiceComputerLab.create(member);

    res.status(200).json({
        success: true,
        service_computerlab,
    });
}

// Upadate upadateServiceComputerLab
exports.updateServiceComputerLab = async (req, res, next) =>{
  let service_computerlab = await ServiceComputerLab.findById(req.params.id);

  service_computerlab = await ServiceComputerLab.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    service_computerlab,
});
}

// delete deleteServiceComputerLab
exports.deleteServiceComputerLab = async(req, res, next) =>{

  let service_computerlab = await ServiceComputerLab.findById(req.params.id);

  if(!service_computerlab){
    return res.status(500).json({
      success:false,
      message:"Service Computer Lab detail not found"
    })
  }

  service_computerlab = await ServiceComputerLab.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Service Computer Lab detail is deleted successfully"
});

}