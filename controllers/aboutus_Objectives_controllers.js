const AboutusObjectives = require("../models/aboutus_Objectives_models");

// single getAboutusObjectives
exports.getAboutusObjectives = async (req, res, next) =>{
    const a = await AboutusObjectives.findById(req.params.id);
    console.log(a);
  res.status(200).json({
    success: true,
    a,
  });
}

// All getAboutusObjectives
exports.getAboutusObjectivesAll = async (req, res, next) =>{
    const aboutus = await AboutusObjectives.find();
    console.log(aboutus);
  res.status(200).json({
    success: true,
    aboutus,
  });
}

// Add addAboutusObjectives 
exports.addAboutusObjectives = async (req, res) =>{
    const { description } = req.body;
    // console.log(req.body);
    const aboutus = {
        description: description
    }
    // console.log(aboutus);
    const a = await AboutusObjectives.create(aboutus);

    res.status(200).json({
        success: true,
        a,
    });
}

// Upadate upadateAboutusObjectives
exports.updateAboutusObjectives = async (req, res, next) =>{
  let detail = await AboutusObjectives.findById(req.params.id);

  detail = await AboutusObjectives.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    detail,
});
}

// delete deleteAboutusObjectives
exports.deleteAboutusObjectives = async(req, res, next) =>{

  let detail = await AboutusObjectives.findById(req.params.id);

  if(!detail){
    return res.status(500).json({
      success:false,
      message:"Detail not found"
    })
  }

  detail = await AboutusObjectives.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Detail is deleted successfully"
});

}