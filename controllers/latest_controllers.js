const Latest = require("../models/latest_models");

// single getLatest
exports.getLatest = async (req, res, next) =>{
    const latest = await Latest.findById(req.params.id);
  res.status(200).json({
    success: true,
    latest,
  });
}

// All getGroup
exports.getLatestAll = async (req, res, next) =>{
    const latest = await Latest.find();
  res.status(200).json({
    success: true,
    latest,
  });
}

// Add addLatest 
exports.addLatest = async (req, res) =>{
    const { date, description, imagesurl } = req.body;
    const member = {
        date: date,
        description: description,
        imagesurl: imagesurl
    }
    // console.log(aboutus);
    const latests = await Latest.create(member);

    res.status(200).json({
        success: true,
        latests,
    });
}

// Upadate upadateLatest
exports.updateLatest = async (req, res, next) =>{
  let latest = await Latest.findById(req.params.id);

  latest = await Latest.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    latest,
});
}

// delete deleteLatest
exports.deleteLatest = async(req, res, next) =>{

  let latest = await Latest.findById(req.params.id);

  if(!latest){
    return res.status(500).json({
      success:false,
      message:"latest detail not found"
    })
  }

  latest = await Latest.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"latest detail is deleted successfully"
});

}