const Aboutus = require("../models/aboutus_SSMV_models");

// single getAboutusSSMV
exports.getAboutusSSMV = async (req, res, next) =>{
    const ssmv = await Aboutus.findById(req.params.id);
  res.status(200).json({
    success: true,
    ssmv,
  });
}

// All getAboutusSSMV
exports.getAboutusSSMVAll = async (req, res, next) =>{
    const ssmv = await Aboutus.find();
  res.status(200).json({
    success: true,
    ssmv,
  });
}

// Add addAboutusSSMV 
exports.addAboutusSSMV = async (req, res) =>{
    const { description, images } = req.body;
    const aboutus = {
        description: description,
        images: images,
    }
    const ssmv = await Aboutus.create(aboutus);

    res.status(200).json({
        success: true,
        ssmv,
    });
}

// Upadate upadateAboutusSSMV
exports.updateAboutusSSMV = async (req, res, next) =>{
  let ssmv = await Aboutus.findById(req.params.id);

  ssmv = await Aboutus.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    ssmv,
});
}

// delete deleteAboutusSSMV
exports.deleteAboutusSSMV = async(req, res, next) =>{

  let ssmv = await Aboutus.findById(req.params.id);

  if(!ssmv){
    return res.status(500).json({
      success:false,
      message:"SSMV not found"
    })
  }

  ssmv = await Aboutus.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"SSMV is deleted successfully"
});

}