const Donate = require("../models/donate_models");

// single getDonate
exports.getDonate = async (req, res, next) =>{
    const donater_detail = await Donate.findById(req.params.id);
  res.status(200).json({
    success: true,
    donater_detail,
  });
}

// All getDonate
exports.getDonateAll = async (req, res, next) =>{
    const donater_details = await Donate.find();
  res.status(200).json({
    success: true,
    donater_details,
  });
}

// Add addDonate 
exports.addDonate = async (req, res) =>{
    const { name, description, imagesurl } = req.body;
    const donate = {
        name: name,
        description: description, 
        imagesurl: imagesurl,
    }
    // console.log(aboutus);
    const donater_detail = await Donate.create(donate);

    res.status(200).json({
        success: true,
        donater_detail,
    });
}

// Upadate upadateDonate
exports.updateDonate = async (req, res, next) =>{
  let donater_detail = await Donate.findById(req.params.id);

  donater_detail = await Donate.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    donater_detail,
});
}

// delete deleteDonate
exports.deleteDonate = async(req, res, next) =>{

  let donater_detail = await Donate.findById(req.params.id);

  if(!donater_detail){
    return res.status(500).json({
      success:false,
      message:"Donater detail not found"
    })
  }

  donater_detail = await Donate.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Donater detail is deleted successfully"
});

}