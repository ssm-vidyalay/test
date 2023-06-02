const Group = require("../models/collegeAdministration_models");

// single getGroup
exports.getGroup = async (req, res, next) =>{
    const member_detail = await Group.findById(req.params.id);
  res.status(200).json({
    success: true,
    member_detail,
  });
}

// All getGroup
exports.getGroupAll = async (req, res, next) =>{
    const member_details = await Group.find();
  res.status(200).json({
    success: true,
    member_details,
  });
}

// Add addGroup 
exports.addGroup = async (req, res) =>{
    const { name, description, imagesurl } = req.body;
    const member = {
        name: name,
        description: description,
        imagesurl: imagesurl,
    }
    // console.log(aboutus);
    const member_detail = await Group.create(member);

    res.status(200).json({
        success: true,
        member_detail,
    });
}

// Upadate upadateGroup
exports.updateGroup = async (req, res, next) =>{
  let member_detail = await Group.findById(req.params.id);

  member_detail = await Group.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    member_detail,
});
}

// delete deleteGroup
exports.deleteGroup = async(req, res, next) =>{

  let member_detail = await Group.findById(req.params.id);

  if(!member_detail){
    return res.status(500).json({
      success:false,
      message:"member detail not found"
    })
  }

  member_detail = await Group.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"member detail is deleted successfully"
});

}