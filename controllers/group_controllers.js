const Group = require("../models/group_models");

// single getGroup
exports.getGroup = async (req, res, next) =>{
    const group = await Group.findById(req.params.id);
  res.status(200).json({
    success: true,
    group,
  });
}

// All getGroup
exports.getGroupAll = async (req, res, next) =>{
    const group = await Group.find();
  res.status(200).json({
    success: true,
    group,
  });
}

// Add addGroup 
exports.addGroup = async (req, res) =>{
    const { group } = req.body;
    const member = {
        group
    }
    // console.log(aboutus);
    const groups = await Group.create(member);

    res.status(200).json({
        success: true,
        groups,
    });
}

// Upadate upadateGroup
exports.updateGroup = async (req, res, next) =>{
  let group = await Group.findById(req.params.id);

  group = await Group.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    group,
});
}

// delete deleteGroup
exports.deleteGroup = async(req, res, next) =>{

  let group = await Group.findById(req.params.id);

  if(!group){
    return res.status(500).json({
      success:false,
      message:"member detail not found"
    })
  }

  group = await Group.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"member detail is deleted successfully"
});

}