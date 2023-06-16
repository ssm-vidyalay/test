const HomeAbout = require("../models/home_about_models");

// single getHomeAbout
exports.getHomeAbout = async (req, res, next) =>{
    const home_about = await HomeAbout.findById(req.params.id);
  res.status(200).json({
    success: true,
    home_about,
  });
}

// All getHomeAbout
exports.getHomeAboutAll = async (req, res, next) =>{
    const home_about = await HomeAbout.find();
  res.status(200).json({
    success: true,
    home_about,
  });
}

// Add addHomeAbout 
exports.addHomeAbout = async (req, res) =>{
    const { image, description  } = req.body;
    const member = {
        image: image,
        description: description
    }
    // console.log(aboutus);
    const home_abouts = await HomeAbout.create(member);

    res.status(200).json({
        success: true,
        home_abouts,
    });
}

// Upadate upadateHomeAbout
exports.updateHomeAbout = async (req, res, next) =>{
  let home_about = await HomeAbout.findById(req.params.id);

  home_about = await HomeAbout.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    home_about,
});
}

// delete deleteHomeAbout
exports.deleteHomeAbout = async(req, res, next) =>{

  let home_about = await HomeAbout.findById(req.params.id);

  if(!home_about){
    return res.status(500).json({
      success:false,
      message:"Home About detail not found"
    })
  }

  home_about = await HomeAbout.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Home About detail is deleted successfully"
});

}