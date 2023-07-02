const CollegeAdministration = require("../models/collegeAdministration_models");

// single getCollegeAdministration
exports.getCollegeAdministration = async (req, res, next) =>{
    const data = await CollegeAdministration.findById(req.params.id);
  res.status(200).json({
    success: true,
    data,
  });
}

// All getCollegeAdministration
exports.getCollegeAdministrationAll = async (req, res, next) =>{
    const data = await CollegeAdministration.find();
  res.status(200).json({
    success: true,
    data,
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
    const data = await CollegeAdministration.create(member);

    res.status(200).json({
        success: true,
        data,
    });
}

// Upadate upadateCollegeAdministration
exports.updateCollegeAdministration = async (req, res, next) =>{
  let data = await CollegeAdministration.findById(req.params.id);

  data = await CollegeAdministration.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    data,
});
}

// delete deleteCollegeAdministration
exports.deleteCollegeAdministration = async(req, res, next) =>{

  let data = await CollegeAdministration.findById(req.params.id);

  if(!data){
    return res.status(500).json({
      success:false,
      message:"member detail not found"
    })
  }

  data = await CollegeAdministration.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"member detail is deleted successfully"
});

}