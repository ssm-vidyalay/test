const ServiceHostel = require("../models/service_hostel_models");

// single getServiceHostel
exports.getServiceHostel = async (req, res, next) =>{
    const facility = await ServiceHostel.findById(req.params.id);
  res.status(200).json({
    success: true,
    facility,
  });
}

// All getServiceHostel
exports.getServiceHostelAll = async (req, res, next) =>{
    const facilities = await ServiceHostel.find();
  res.status(200).json({
    success: true,
    facilities,
  });
}

// Add addServiceHostel 
exports.addServiceHostel = async (req, res) =>{
    const { name, description, imagesurl } = req.body;
    const member = {
        name: name,
        description: description,
        imagesurl: imagesurl,
    }
    // console.log(aboutus);
    const facility = await ServiceHostel.create(member);

    res.status(200).json({
        success: true,
        facility,
    });
}

// Upadate upadateServiceHostel
exports.updateServiceHostel = async (req, res, next) =>{
  let facility = await ServiceHostel.findById(req.params.id);

  facility = await ServiceHostel.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    facility,
});
}

// delete deleteServiceHostel
exports.deleteServiceHostel = async(req, res, next) =>{

  let facility = await ServiceHostel.findById(req.params.id);

  if(!facility){
    return res.status(500).json({
      success:false,
      message:"facility detail not found"
    })
  }

  facility = await ServiceHostel.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"facility detail is deleted successfully"
});

}