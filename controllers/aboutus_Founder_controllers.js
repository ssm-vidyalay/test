const AboutusFounder = require("../models/aboutus_Founder_models");

// single getAboutusAnnualReport
exports.getAboutusFounder = async (req, res, next) =>{
    const data = await AboutusFounder.findById(req.params.id);
  res.status(200).json({
    success: true,
    data,
  });
}

// All getAboutusFounder
exports.getAboutusFounderAll = async (req, res, next) =>{
    const data = await AboutusFounder.find();
  res.status(200).json({
    success: true,
    data,
  });
}

// Add addAboutusFounder 
exports.addAboutusFounder = async (req, res) =>{
    const { name, image, description, designation } = req.body;
    const aboutus = {
        name: name,
        image: image,
        description: description,
        designation: designation,
    }
    
    const FounderSingle = await AboutusFounder.create(aboutus);

    res.status(200).json({
        success: true,
        FounderSingle,
    });
}

// Upadate upadateAboutusFounder
exports.updateAboutusFounder = async (req, res, next) =>{
  let data = await AboutusFounder.findById(req.params.id);

  data = await AboutusFounder.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    data,
});
}

// delete deleteAboutusFounder
exports.deleteAboutusFounder = async(req, res, next) =>{

  let data = await AboutusFounder.findById(req.params.id);

  if(!data){
    return res.status(500).json({
      success:false,
      message:"Founder not found"
    })
  }

  data = await AboutusFounder.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Founder is deleted successfully"
});

}