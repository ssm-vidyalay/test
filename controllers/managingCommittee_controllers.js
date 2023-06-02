const ManagingCommittee = require("../models/managingCommittee_models");

// single getGroup
exports.getManagingCommittee = async (req, res, next) =>{
    const member_detail = await ManagingCommittee.findById(req.params.id);
  res.status(200).json({
    success: true,
    member_detail,
  });
}

// All getGroup
exports.getManagingCommitteeAll = async (req, res, next) =>{
    const member_details = await ManagingCommittee.find();
  res.status(200).json({
    success: true,
    member_details,
  });
}

// Add addManagingCommittee 
exports.addManagingCommittee = async (req, res) =>{
    const { name, description, imagesurl } = req.body;
    const member = {
        name: name,
        description: description,
        imagesurl: imagesurl,
    }
    // console.log(aboutus);
    const member_detail = await ManagingCommittee.create(member);

    res.status(200).json({
        success: true,
        member_detail,
    });
}

// Upadate upadateManagingCommittee
exports.updateManagingCommittee = async (req, res, next) =>{
  let member_detail = await ManagingCommittee.findById(req.params.id);

  member_detail = await ManagingCommittee.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    member_detail,
});
}

// delete deleteManagingCommittee
exports.deleteManagingCommittee = async(req, res, next) =>{

  let member_detail = await ManagingCommittee.findById(req.params.id);

  if(!member_detail){
    return res.status(500).json({
      success:false,
      message:"member detail not found"
    })
  }

  member_detail = await ManagingCommittee.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"member detail is deleted successfully"
});

}