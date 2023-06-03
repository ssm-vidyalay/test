const AboutusFounder = require("../models/aboutus_Founder_models");

// single getAboutusAnnualReport
exports.getAboutusFounder = async (req, res, next) =>{
    const a = await AboutusFounder.findById(req.params.id);
    console.log(a);
  res.status(200).json({
    success: true,
    a,
  });
}

// All getAboutusFounder
exports.getAboutusFounderAll = async (req, res, next) =>{
    const aboutus = await AboutusFounder.find();
    console.log(aboutus);
  res.status(200).json({
    success: true,
    aboutus,
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
    const a = await AboutusFounder.create(aboutus);

    res.status(200).json({
        success: true,
        a,
    });
}

// Upadate upadateAboutusFounder
exports.updateAboutusFounder = async (req, res, next) =>{
  let detail = await AboutusFounder.findById(req.params.id);

  detail = await AboutusFounder.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    detail,
});
}

// delete deleteAboutusFounder
exports.deleteAboutusFounder = async(req, res, next) =>{

  let detail = await AboutusFounder.findById(req.params.id);

  if(!detail){
    return res.status(500).json({
      success:false,
      message:"Detail not found"
    })
  }

  detail = await AboutusFounder.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Detail is deleted successfully"
});

}