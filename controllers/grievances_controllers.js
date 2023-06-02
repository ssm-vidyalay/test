const Grievances = require("../models/grievances_models");

// single getGrievance
exports.getGrievance = async (req, res, next) =>{
    const grievance_detail = await Grievances.findById(req.params.id);
  res.status(200).json({
    success: true,
    grievance_detail,
  });
}

// All getGrievance
exports.getGrievanceAll = async (req, res, next) =>{
    const grievances_details = await Grievances.find();
  res.status(200).json({
    success: true,
    grievances_details,
  });
}

// Add Grievance 
exports.addGrievance = async (req, res) =>{
    const { name, address, grievance } = req.body;
    // console.log(req.body);
    const grievanceobject = {
        name: name,
        address: address,
        grievance: grievance,
    }
    // console.log(aboutus);
    const grievance_detail = await Grievances.create(grievanceobject);

    res.status(200).json({
        success: true,
        grievance_detail,
    });
}

// Upadate upadateGrievance
exports.updateGrievance = async (req, res, next) =>{
  let grievance_detail = await Grievances.findById(req.params.id);

  grievance_detail = await Grievances.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    grievance_detail,
});
}

// delete deleteGrievance
exports.deleteGrievance = async(req, res, next) =>{

  let grievance_detail = await Grievances.findById(req.params.id);

  if(!grievance_detail){
    return res.status(500).json({
      success:false,
      message:"Grievance detail not found"
    })
  }

  grievance_detail = await Grievances.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Grievance detail is deleted successfully"
});

}