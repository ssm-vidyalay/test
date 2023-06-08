const CollegeAdministration = require("../models/collegeAdministration_models");

// single getCollegeAdministration
exports.getCollegeAdministration = async (req, res, next) =>{
    const collegeadministration = await CollegeAdministration.findById(req.params.id);
  res.status(200).json({
    success: true,
    collegeadministration,
  });
}

// All getCollegeAdministration
exports.getCollegeAdministrationAll = async (req, res, next) =>{
    const collegeadministration = await CollegeAdministration.find();
  res.status(200).json({
    success: true,
    collegeadministration,
  });
}

// Add addCollegeAdministration 
exports.addCollegeAdministration = async (req, res) =>{
  const { name, image, description, designation } = req.body;
  const member = {
      name: name,
      image: image,
      description: description,
      designation: designation,
  }
    // console.log(aboutus);
    const collegeadministration = await CollegeAdministration.create(member);

    res.status(200).json({
        success: true,
        collegeadministration,
    });
}

// Upadate upadateCollegeAdministration
exports.updateCollegeAdministration = async (req, res, next) =>{
  let collegeadministration = await CollegeAdministration.findById(req.params.id);

  collegeadministration = await CollegeAdministration.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    collegeadministration,
});
}

// delete deleteCollegeAdministration
exports.deleteCollegeAdministration = async(req, res, next) =>{

  let collegeadministration = await CollegeAdministration.findById(req.params.id);

  if(!collegeadministration){
    return res.status(500).json({
      success:false,
      message:"member detail not found"
    })
  }

  collegeadministration = await CollegeAdministration.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"member detail is deleted successfully"
});

}