const ManagingCommittee = require("../models/managingCommittee_models");

// single getGroup
exports.getManagingCommittee = async (req, res, next) =>{
    const data = await ManagingCommittee.findById(req.params.id);
  res.status(200).json({
    success: true,
    data,
  });
}

// All getGroup
exports.getManagingCommitteeAll = async (req, res, next) =>{
    const data = await ManagingCommittee.find();
  res.status(200).json({
    success: true,
    data,
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
    const data = await ManagingCommittee.create(member);

    res.status(200).json({
        success: true,
        data,
    });
}

// Upadate upadateManagingCommittee
exports.updateManagingCommittee = async (req, res, next) =>{
  let data = await ManagingCommittee.findById(req.params.id);

  data = await ManagingCommittee.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    data,
});
}

// delete deleteManagingCommittee
exports.deleteManagingCommittee = async(req, res, next) =>{

  let data = await ManagingCommittee.findById(req.params.id);

  if(!data){
    return res.status(500).json({
      success:false,
      message:"member detail not found"
    })
  }

  data = await ManagingCommittee.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"member detail is deleted successfully"
});

}