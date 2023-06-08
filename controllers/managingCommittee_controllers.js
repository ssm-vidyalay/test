const ManagingCommittee = require("../models/managingCommittee_models");

// single getGroup
exports.getManagingCommittee = async (req, res, next) =>{
    const managingcommittee = await ManagingCommittee.findById(req.params.id);
  res.status(200).json({
    success: true,
    managingcommittee,
  });
}

// All getGroup
exports.getManagingCommitteeAll = async (req, res, next) =>{
    const managingcommittee = await ManagingCommittee.find();
  res.status(200).json({
    success: true,
    managingcommittee,
  });
}

// Add addManagingCommittee 
exports.addManagingCommittee = async (req, res) =>{
    const { name, image, description, designation } = req.body;
    const member = {
        name: name,
        image: image,
        description: description,
        designation: designation,
    }
    // console.log(aboutus);
    const managingcommittees = await ManagingCommittee.create(member);

    res.status(200).json({
        success: true,
        managingcommittees,
    });
}

// Upadate upadateManagingCommittee
exports.updateManagingCommittee = async (req, res, next) =>{
  let managingcommittee = await ManagingCommittee.findById(req.params.id);

  managingcommittee = await ManagingCommittee.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    managingcommittee,
});
}

// delete deleteManagingCommittee
exports.deleteManagingCommittee = async(req, res, next) =>{

  let managingcommittee = await ManagingCommittee.findById(req.params.id);

  if(!managingcommittee){
    return res.status(500).json({
      success:false,
      message:"member detail not found"
    })
  }

  managingcommittee = await ManagingCommittee.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"member detail is deleted successfully"
});

}