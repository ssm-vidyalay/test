const AboutusPrinciple = require("../models/aboutus_Principle_models");

// single getAboutusPrinciple
exports.getAboutusPrinciple = async (req, res, next) =>{
    const principle = await AboutusPrinciple.findById(req.params.id);
    console.log(principle);
  res.status(200).json({
    success: true,
    principle,
  });
}

// All getAboutusPrinciple
exports.getAboutusPrincipleAll = async (req, res, next) =>{
    const principle = await AboutusPrinciple.find();
    console.log(principle);
  res.status(200).json({
    success: true,
    principle,
  });
}

// Add addAboutusPrinciple 
exports.addAboutusPrinciple = async (req, res) =>{
  const { name, image, description, designation } = req.body;
  // console.log(req.body);
  const aboutus = {
      name: name,
      image: image,
      description: description,
      designation: designation,
  }
    const principles = await AboutusPrinciple.create(aboutus);

    res.status(200).json({
        success: true,
        principles,
    });
}

// Upadate upadateAboutusPrinciple
exports.updateAboutusPrinciple = async (req, res, next) =>{
  let principle = await AboutusPrinciple.findById(req.params.id);

  principle = await AboutusPrinciple.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    principle,
});
}

// delete deleteAboutusPrinciple
exports.deleteAboutusPrinciple = async(req, res, next) =>{

  let principle = await AboutusPrinciple.findById(req.params.id);

  if(!principle){
    return res.status(500).json({
      success:false,
      message:"Principle not found"
    })
  }

  principle = await AboutusPrinciple.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Principle is deleted successfully"
});

}