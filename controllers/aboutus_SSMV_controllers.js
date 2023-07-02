const Aboutus = require("../models/aboutus_SSMV_models");

// single getAboutusSSMV
exports.getAboutusSSMV = async (req, res, next) =>{
    const data = await Aboutus.findById(req.params.id);
  res.status(200).json({
    success: true,
    data,
  });
}

// All getAboutusSSMV
exports.getAboutusSSMVAll = async (req, res, next) =>{
    const data = await Aboutus.find();
    res.status(200).json({
    success: true,
    data,
  });
}

// Add addAboutusSSMV 
exports.addAboutusSSMV = async (req, res) =>{
    const { description, imageurl } = req.body;
    const aboutus = {
        description: description,
        imageurl: imageurl,
    }
    const data = await Aboutus.create(aboutus);

    res.status(200).json({
        success: true,
        data,
    });
}

// Upadate upadateAboutusSSMV
exports.updateAboutusSSMV = async (req, res, next) =>{
  let data = await Aboutus.findById(req.params.id);

  data = await Aboutus.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    data,
});
}

// delete deleteAboutusSSMV
exports.deleteAboutusSSMV = async(req, res, next) =>{

  let data = await Aboutus.findById(req.params.id);

  if(!data){
    return res.status(500).json({
      success:false,
      message:"SSMV not found"
    })
  }

  data = await Aboutus.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"SSMV is deleted successfully"
});

}