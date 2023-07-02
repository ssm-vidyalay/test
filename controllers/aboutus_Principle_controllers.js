const AboutusPrinciple = require("../models/aboutus_Principle_models");

// single getAboutusPrinciple
exports.getAboutusPrinciple = async (req, res, next) =>{
    const data = await AboutusPrinciple.findById(req.params.id);
  res.status(200).json({
    success: true,
    data,
  });
}

// All getAboutusPrinciple
exports.getAboutusPrincipleAll = async (req, res, next) =>{
    const data = await AboutusPrinciple.find();
  res.status(200).json({
    success: true,
    data,
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
    const data = await AboutusPrinciple.create(aboutus);

    res.status(200).json({
        success: true,
        data,
    });
}

// Upadate upadateAboutusPrinciple
exports.updateAboutusPrinciple = async (req, res, next) =>{
  let data = await AboutusPrinciple.findById(req.params.id);

  data = await AboutusPrinciple.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    data,
});
}

// delete deleteAboutusPrinciple
exports.deleteAboutusPrinciple = async(req, res, next) =>{

  let data = await AboutusPrinciple.findById(req.params.id);

  if(!data){
    return res.status(500).json({
      success:false,
      message:"Principle not found"
    })
  }

  data = await AboutusPrinciple.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Principle is deleted successfully"
});

}