const AboutusAnnualReport = require("../models/aboutus_AnnualReport_models");

// single getAboutusAnnualReport
exports.getAboutusAnnualReport = async (req, res, next) =>{
    const annualReport = await AboutusAnnualReport.findById(req.params.id);
    console.log(annualReport);
  res.status(200).json({
    success: true,
    annualReport,
  });
}

// All getAboutusAnnualReport
exports.getAboutusAnnualReportAll = async (req, res, next) =>{
    const anuualReport = await AboutusAnnualReport.find();
    console.log(anuualReport);
  res.status(200).json({
    success: true,
    anuualReport,
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
    const annualReport = await AboutusAnnualReport.create(aboutus);

    res.status(200).json({
        success: true,
        annualReport,
    });
}

// Upadate upadateAboutusAnnualReport
exports.updateAboutusAnnualReport = async (req, res, next) =>{
  let annualReport = await AboutusAnnualReport.findById(req.params.id);

  annualReport = await AboutusAnnualReport.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    annualReport,
});
}

// delete deleteAboutusAnnualReport
exports.deleteAboutusAnnualReport = async(req, res, next) =>{

  let annualReport = await AboutusAnnualReport.findById(req.params.id);

  if(!annualReport){
    return res.status(500).json({
      success:false,
      message:"Annual Report not found"
    })
  }

  annualReport = await AboutusAnnualReport.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"Annual Report is deleted successfully"
});

}