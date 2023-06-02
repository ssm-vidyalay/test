const AlumniEvent = require("../models/alumni_event_models");

// single getAlumniEvent
exports.getAlumniEvent = async (req, res, next) =>{
    const alumni = await AlumniEvent.findById(req.params.id);
  res.status(200).json({
    success: true,
    alumni,
  });
}

// All getAlumniEvent
exports.getAlumniEventAll = async (req, res, next) =>{
    const alumnis = await AlumniEvent.find();
  res.status(200).json({
    success: true,
    alumnis,
  });
}

// Add addAlumniEvent 
exports.addAlumniEvent = async (req, res) =>{
    const { name, description, imagesurl, venue } = req.body;
    const member = {
        name: name,
        description: description,
        imagesurl: imagesurl,
        venue: venue
    }
    const alumni = await AlumniEvent.create(member);

    res.status(200).json({
        success: true,
        alumni,
    });
}

// Upadate upadateAlumniEvent
exports.updateAlumniEvent = async (req, res, next) =>{
  let alumni = await AlumniEvent.findById(req.params.id);

  alumni = await AlumniEvent.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    alumni,
});
}

// delete deleteAlumniEvent
exports.deleteAlumniEvent = async(req, res, next) =>{

  let alumni = await AlumniEvent.findById(req.params.id);

  if(!alumni){
    return res.status(500).json({
      success:false,
      message:"alumni detail not found"
    })
  }

  alumni = await AlumniEvent.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"alumni detail is deleted successfully"
});

}