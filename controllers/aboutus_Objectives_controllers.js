const AboutusObjectives = require("../models/aboutus_Objectives_models");

// single getAboutusObjectives
exports.getAboutusObjectives = async (req, res, next) =>{
    const objective = await AboutusObjectives.findById(req.params.id);
  res.status(200).json({
    success: true,
    objective,
  });
}

// All getAboutusObjectives
exports.getAboutusObjectivesAll = async (req, res, next) =>{
    const objective = await AboutusObjectives.find();
  res.status(200).json({
    success: true,
    objective,
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
    const objective = await AboutusObjectives.create(aboutus);

    res.status(200).json({
        success: true,
        objective,
    });
}

// Upadate upadateAboutusObjectives
exports.updateAboutusObjectives = async (req, res, next) =>{
  let objective = await AboutusObjectives.findById(req.params.id);

  objective = await AboutusObjectives.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    objective,
});
}

// delete deleteAboutusObjectives
exports.deleteAboutusObjectives = async(req, res, next) =>{

  let objective = await AboutusObjectives.findById(req.params.id);

  if(!objective){
    return res.status(500).json({
      success:false,
      message:"Objective not found"
    })
  }

  objective = await AboutusObjectives.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Objective is deleted successfully"
});

}