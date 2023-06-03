const AlumniLatest = require("../models/alumni_latest_models");

// single getAlumniLatest
exports.getAlumniLatest = async (req, res, next) =>{
    const alumni_latest = await AlumniLatest.findById(req.params.id);
  res.status(200).json({
    success: true,
    alumni_latest,
  });
}

// All getAlumniLatest
exports.getAlumniLatestAll = async (req, res, next) =>{
    const alumni_latest = await AlumniLatest.find();
  res.status(200).json({
    success: true,
    alumni_latest,
  });
}

// Add addAlumniLatest 
exports.addAlumniLatest = async (req, res) =>{
    const { date, description, imagesurl } = req.body;
    const member = {
        date: date,
        description: description,
        imagesurl: imagesurl,
    }
    const alumni_latest = await AlumniLatest.create(member);

    res.status(200).json({
        success: true,
        alumni_latest,
    });
}

// Upadate upadateAlumniLatest
exports.updateAlumniLatest = async (req, res, next) =>{
  let alumni_latest = await AlumniLatest.findById(req.params.id);

  alumni_latest = await AlumniLatest.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    alumni_latest,
});
}

// delete deleteAlumniLatest
exports.deleteAlumniLatest = async(req, res, next) =>{

  let alumni_latest = await AlumniLatest.findById(req.params.id);

  if(!alumni_latest){
    return res.status(500).json({
      success:false,
      message:"alumni detail not found"
    })
  }

  alumni_latest = await AlumniLatest.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"alumni detail is deleted successfully"
});

}