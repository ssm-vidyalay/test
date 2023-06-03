const AboutusAnnualReport = require("../models/aboutus_AnnualReport_models");

// single getAboutusAnnualReport
exports.getAboutusAnnualReport = async (req, res, next) =>{
    const a = await AboutusAnnualReport.findById(req.params.id);
    console.log(a);
  res.status(200).json({
    success: true,
    a,
  });
}

// All getAboutusAnnualReport
exports.getAboutusAnnualReportAll = async (req, res, next) =>{
    const aboutus = await AboutusAnnualReport.find();
    console.log(aboutus);
  res.status(200).json({
    success: true,
    aboutus,
  });
}

// Add addAboutusAnnualReport 
exports.addAboutusAnnualReport = async (req, res) =>{
    const { description } = req.body;
    // console.log(req.body);
    const aboutus = {
        description: description,
    }
    // console.log(aboutus);
    const a = await AboutusAnnualReport.create(aboutus);

    res.status(200).json({
        success: true,
        a,
    });
}

// Upadate upadateAboutusAnnualReport
exports.updateAboutusAnnualReport = async (req, res, next) =>{
  let detail = await AboutusAnnualReport.findById(req.params.id);

  detail = await AboutusAnnualReport.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    detail,
});
}

// delete deleteAboutusAnnualReport
exports.deleteAboutusAnnualReport = async(req, res, next) =>{

  let detail = await AboutusAnnualReport.findById(req.params.id);

  if(!detail){
    return res.status(500).json({
      success:false,
      message:"Detail not found"
    })
  }

  detail = await AboutusAnnualReport.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Detail is deleted successfully"
});

}