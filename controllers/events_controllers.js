const Event = require("../models/events_models");

// single getEvent
exports.getEvent = async (req, res, next) =>{
    const event = await Event.findById(req.params.id);
  res.status(200).json({
    success: true,
    event,
  });
}

// All getEvent
exports.getEventAll = async (req, res, next) =>{
    const event = await Event.find();
  res.status(200).json({
    success: true,
    event,
  });
}

// Add addEvent 
exports.addEvent = async (req, res) =>{
    const { name, description, imagesurl, venue } = req.body;
    const member = {
        name: name,
        description: description,
        imagesurl: imagesurl,
        venue: venue
    }
    const event = await Event.create(member);

    res.status(200).json({
        success: true,
        event,
    });
}

// Upadate upadateEvent
exports.updateEvent = async (req, res, next) =>{
  let event = await Event.findById(req.params.id);

  event = await Event.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    event,
});
}

// delete deleteEvent
exports.deleteEvent = async(req, res, next) =>{

  let event = await Event.findById(req.params.id);

  if(!event){
    return res.status(500).json({
      success:false,
      message:"Event detail not found"
    })
  }

  event = await Event.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Event detail is deleted successfully"
});

}