const ServiceComputerLab = require("../models/service_computerLab_models");

// single getServiceComputerLab
exports.getServiceComputerLab = async (req, res, next) =>{
    const data = await ServiceComputerLab.findById(req.params.id);
  res.status(200).json({
    success: true,
    data,
  });
}

// All getServiceComputerLab
exports.getServiceComputerLabAll = async (req, res, next) =>{
    const data = await ServiceComputerLab.find();
  res.status(200).json({
    success: true,
    data,
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
    const data = await ServiceComputerLab.create(member);

    res.status(200).json({
        success: true,
        data,
    });
}

// Upadate upadateServiceComputerLab
exports.updateServiceComputerLab = async (req, res, next) =>{
  let data = await ServiceComputerLab.findById(req.params.id);

  data = await ServiceComputerLab.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    data,
});
}

// delete deleteServiceComputerLab
exports.deleteServiceComputerLab = async(req, res, next) =>{

  let data = await ServiceComputerLab.findById(req.params.id);

  if(!data){
    return res.status(500).json({
      success:false,
      message:"Service Computer Lab detail not found"
    })
  }

  data = await ServiceComputerLab.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Service Computer Lab detail is deleted successfully"
});

}