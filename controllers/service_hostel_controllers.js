const ServiceHostel = require("../models/service_hostel_models");

// single getServiceHostel
exports.getServiceHostel = async (req, res, next) =>{
    const service_hostel = await ServiceHostel.findById(req.params.id);
  res.status(200).json({
    success: true,
    service_hostel,
  });
}

// All getServiceHostel
exports.getServiceHostelAll = async (req, res, next) =>{
    const service_hostel = await ServiceHostel.find();
  res.status(200).json({
    success: true,
    service_hostel,
  });
}

// Add addServiceHostel 
exports.addServiceHostel = async (req, res) =>{
    const { description, images } = req.body;
    const member = {
        description: description,
        images: images,
    }
    // console.log(aboutus);
    const service_hostel = await ServiceHostel.create(member);

    res.status(200).json({
        success: true,
        service_hostel,
    });
}

// Upadate upadateServiceHostel
exports.updateServiceHostel = async (req, res, next) =>{
  let service_hostel = await ServiceHostel.findById(req.params.id);

  service_hostel = await ServiceHostel.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    service_hostel,
});
}

// delete deleteServiceHostel
exports.deleteServiceHostel = async(req, res, next) =>{

  let service_hostel = await ServiceHostel.findById(req.params.id);

  if(!service_hostel){
    return res.status(500).json({
      success:false,
      message:"Service hostel detail not found"
    })
  }

  service_hostel = await ServiceHostel.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Service hostel detail is deleted successfully"
});

}