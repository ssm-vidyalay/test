const AboutusPrinciple = require("../models/aboutus_Principle_models");

// single getAboutusPrinciple
exports.getAboutusPrinciple = async (req, res, next) =>{
    const a = await AboutusPrinciple.findById(req.params.id);
    console.log(a);
  res.status(200).json({
    success: true,
    a,
  });
}

// All getAboutusPrinciple
exports.getAboutusPrincipleAll = async (req, res, next) =>{
    const aboutus = await AboutusPrinciple.find();
    console.log(aboutus);
  res.status(200).json({
    success: true,
    aboutus,
  });
}

// Add addAboutusPrinciple 
exports.addAboutusPrinciple = async (req, res) =>{
    const { principle } = req.body;
    // console.log(req.body);
    const aboutus = {
        principle: principle
    }
    // console.log(aboutus);
    const a = await AboutusPrinciple.create(aboutus);

    res.status(200).json({
        success: true,
        a,
    });
}

// Upadate upadateAboutusPrinciple
exports.updateAboutusPrinciple = async (req, res, next) =>{
  let detail = await AboutusPrinciple.findById(req.params.id);

  detail = await AboutusPrinciple.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    detail,
});
}

// delete deleteAboutusPrinciple
exports.deleteAboutusPrinciple = async(req, res, next) =>{

  let detail = await AboutusPrinciple.findById(req.params.id);

  if(!detail){
    return res.status(500).json({
      success:false,
      message:"Detail not found"
    })
  }

  detail = await AboutusPrinciple.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Detail is deleted successfully"
});

}