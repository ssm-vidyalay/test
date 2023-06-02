const AlumniLatest = require("../models/alumni_latest_models");

// single getAlumniLatest
exports.getAlumniLatest = async (req, res, next) =>{
    const alumni = await AlumniLatest.findById(req.params.id);
  res.status(200).json({
    success: true,
    alumni,
  });
}

// All getAlumniLatest
exports.getAlumniLatestAll = async (req, res, next) =>{
    const alumnis = await AlumniLatest.find();
  res.status(200).json({
    success: true,
    alumnis,
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
    const alumni = await AlumniLatest.create(member);

    res.status(200).json({
        success: true,
        alumni,
    });
}

// Upadate upadateAlumniLatest
exports.updateAlumniLatest = async (req, res, next) =>{
  let alumni = await AlumniLatest.findById(req.params.id);

  alumni = await AlumniLatest.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    alumni,
});
}

// delete deleteAlumniLatest
exports.deleteAlumniLatest = async(req, res, next) =>{

  let alumni = await AlumniLatest.findById(req.params.id);

  if(!alumni){
    return res.status(500).json({
      success:false,
      message:"alumni detail not found"
    })
  }

  alumni = await AlumniLatest.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"alumni detail is deleted successfully"
});

}