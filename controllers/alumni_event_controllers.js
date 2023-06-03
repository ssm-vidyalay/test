const AlumniEvent = require("../models/alumni_event_models");

// single getAlumniEvent
exports.getAlumniEvent = async (req, res, next) =>{
    const alumni_event = await AlumniEvent.findById(req.params.id);
  res.status(200).json({
    success: true,
    alumni_event,
  });
}

// All getAlumniEvent
exports.getAlumniEventAll = async (req, res, next) =>{
    const alumni_event = await AlumniEvent.find();
  res.status(200).json({
    success: true,
    alumni_event,
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
    const alumni_event = await AlumniEvent.create(member);

    res.status(200).json({
        success: true,
        alumni_event,
    });
}

// Upadate upadateAlumniEvent
exports.updateAlumniEvent = async (req, res, next) =>{
  let alumni_event = await AlumniEvent.findById(req.params.id);

  alumni_event = await AlumniEvent.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    alumni_event,
});
}

// delete deleteAlumniEvent
exports.deleteAlumniEvent = async(req, res, next) =>{

  let alumni_event = await AlumniEvent.findById(req.params.id);

  if(!alumni_event){
    return res.status(500).json({
      success:false,
      message:"alumni detail not found"
    })
  }

  alumni_event = await AlumniEvent.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"alumni detail is deleted successfully"
});

}