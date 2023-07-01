const Notice = require("../models/notice_models");

// single getNotice
exports.getNotice = async (req, res, next) =>{
    const notice = await Notice.findById(req.params.id);
  res.status(200).json({
    success: true,
    notice,
  });
}

// All getNotice
exports.getNoticeAll = async (req, res, next) =>{
    const notice = await Notice.find();
  res.status(200).json({
    success: true,
    notice,
  });
}

// Add addNotice 
exports.addNotice = async (req, res) =>{
  const { date, description, imagesurl } = req.body;
  const member = {
      date: date,
      description: description,
      imageurl: imageurl
  }
    const notices = await Notice.create(member);

    res.status(200).json({
        success: true,
        notices,
    });
}

// Upadate upadateNotice
exports.updateNotice = async (req, res, next) =>{
  let notice = await Notice.findById(req.params.id);

  notice = await Notice.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    notice,
});
}

// delete deleteNotice
exports.deleteNotice = async(req, res, next) =>{

  let notice = await Notice.findById(req.params.id);

  if(!notice){
    return res.status(500).json({
      success:false,
      message:"notice detail not found"
    })
  }

  notice = await Notice.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"notice detail is deleted successfully"
});

}