const ServiceHostel = require("../models/service_hostel_models");

// single getServiceHostel
exports.getServiceHostel = async (req, res, next) =>{
    const data = await ServiceHostel.findById(req.params.id);
  res.status(200).json({
    success: true,
    data,
  });
}

// All getServiceHostel
exports.getServiceHostelAll = async (req, res, next) =>{
    const data = await ServiceHostel.find();
  res.status(200).json({
    success: true,
    data,
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
    const data = await ServiceHostel.create(member);

    res.status(200).json({
        success: true,
        data,
    });
}

// Upadate upadateServiceHostel
exports.updateServiceHostel = async (req, res, next) =>{
  let data = await ServiceHostel.findById(req.params.id);

  data = await ServiceHostel.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    data,
});
}

// delete deleteServiceHostel
exports.deleteServiceHostel = async(req, res, next) =>{

  let data = await ServiceHostel.findById(req.params.id);

  if(!data){
    return res.status(500).json({
      success:false,
      message:"Service hostel detail not found"
    })
  }

  data = await ServiceHostel.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Service hostel detail is deleted successfully"
});

}