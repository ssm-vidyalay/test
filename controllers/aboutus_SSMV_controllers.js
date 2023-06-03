const Aboutus = require("../models/aboutus_SSMV_models");

// single getAboutusSSMV
exports.getAboutusSSMV = async (req, res, next) =>{
    const a = await Aboutus.findById(req.params.id);
    console.log(a);
  res.status(200).json({
    success: true,
    a,
  });
}

// All getAboutusSSMV
exports.getAboutusSSMVAll = async (req, res, next) =>{
    const aboutus = await Aboutus.find();
    console.log(aboutus);
  res.status(200).json({
    success: true,
    aboutus,
  });
}

// Add addAboutusSSMV 
exports.addAboutusSSMV = async (req, res) =>{
    const { title, description, imagesurl } = req.body;
    // console.log(req.body);
    const aboutus = {
        title: title,
        description: description,
        imagesurl: imagesurl,
    }
    // console.log(aboutus);
    const a = await Aboutus.create(aboutus);

    res.status(200).json({
        success: true,
        a,
    });
}

// Upadate upadateAboutusSSMV
exports.updateAboutusSSMV = async (req, res, next) =>{
  let detail = await Aboutus.findById(req.params.id);

  detail = await Aboutus.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    detail,
});
}

// delete deleteAboutusSSMV
exports.deleteAboutusSSMV = async(req, res, next) =>{

  let detail = await Aboutus.findById(req.params.id);

  if(!detail){
    return res.status(500).json({
      success:false,
      message:"Detail not found"
    })
  }

  detail = await Aboutus.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Detail is deleted successfully"
});

}