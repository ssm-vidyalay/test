const AlumniTestinomial = require("../models/alumni_testinomial_models");

// single getAlumniTestinomial
exports.getAlumniTestinomial = async (req, res, next) =>{
    const alumni_testinomial = await AlumniTestinomial.findById(req.params.id);
  res.status(200).json({
    success: true,
    alumni_testinomial,
  });
}

// All getAlumniTestinomial
exports.getAlumniTestinomialAll = async (req, res, next) =>{
    const alumni_testinomial = await AlumniTestinomial.find();
  res.status(200).json({
    success: true,
    alumni_testinomial,
  });
}

// Add addAlumniTestinomial 
exports.addAlumniTestinomial = async (req, res) =>{
    const { title, description, imagesurl } = req.body;
    const member = {
        title: title,
        description: description,
        imagesurl: imagesurl,
    }
    const alumni_testinomial = await AlumniTestinomial.create(member);

    res.status(200).json({
        success: true,
        alumni_testinomial,
    });
}

// Upadate upadateAlumniTestinomial
exports.updateAlumniTestinomial = async (req, res, next) =>{
  let alumni_testinomial = await AlumniTestinomial.findById(req.params.id);

  alumni_testinomial = await AlumniTestinomial.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    alumni_testinomial,
});
}

// delete deleteAlumniTestinomial
exports.deleteAlumniTestinomial = async(req, res, next) =>{

  let alumni_testinomial = await AlumniTestinomial.findById(req.params.id);

  if(!alumni_testinomial){
    return res.status(500).json({
      success:false,
      message:"alumni detail not found"
    })
  }

  alumni_testinomial = await AlumniTestinomial.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"alumni detail is deleted successfully"
});

}