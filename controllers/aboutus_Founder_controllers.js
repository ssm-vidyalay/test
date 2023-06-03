const AboutusFounder = require("../models/aboutus_Founder_models");

// single getAboutusAnnualReport
exports.getAboutusFounder = async (req, res, next) =>{
    const founder = await AboutusFounder.findById(req.params.id);
    console.log(founder);
  res.status(200).json({
    success: true,
    founder,
  });
}

// All getAboutusFounder
exports.getAboutusFounderAll = async (req, res, next) =>{
    const founder = await AboutusFounder.find();
    console.log(founder);
  res.status(200).json({
    success: true,
    founder,
  });
}

// Add addAboutusFounder 
exports.addAboutusFounder = async (req, res) =>{
    const { founder } = req.body;
    // console.log(req.body);
    const aboutus = {
        founder: founder
    }
    // console.log(aboutus);
    const FounderSingle = await AboutusFounder.create(aboutus);

    res.status(200).json({
        success: true,
        FounderSingle,
    });
}

// Upadate upadateAboutusFounder
exports.updateAboutusFounder = async (req, res, next) =>{
  let founder = await AboutusFounder.findById(req.params.id);

  founder = await AboutusFounder.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    founder,
});
}

// delete deleteAboutusFounder
exports.deleteAboutusFounder = async(req, res, next) =>{

  let founder = await AboutusFounder.findById(req.params.id);

  if(!founder){
    return res.status(500).json({
      success:false,
      message:"Founder not found"
    })
  }

  founder = await AboutusFounder.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Founder is deleted successfully"
});

}