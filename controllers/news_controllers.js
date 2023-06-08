const News = require("../models/news_models");

// single getNews
exports.getNews = async (req, res, next) =>{
    const news = await News.findById(req.params.id);
  res.status(200).json({
    success: true,
    news,
  });
}

// All getNews
exports.getNewsAll = async (req, res, next) =>{
    const news = await News.find();
  res.status(200).json({
    success: true,
    news,
  });
}

// Add addNews 
exports.addNews = async (req, res) =>{
    const { name, description, imagesurl } = req.body;
    const member = {
        name: name,
        description: description,
        imagesurl: imagesurl
    }
    // console.log(aboutus);
    const newss = await News.create(member);

    res.status(200).json({
        success: true,
        newss,
    });
}

// Upadate upadateNews
exports.updateNews = async (req, res, next) =>{
  let news = await News.findById(req.params.id);

  news = await News.findByIdAndUpdate(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    news,
});
}

// delete deleteNews
exports.deleteNews = async(req, res, next) =>{

  let news = await News.findById(req.params.id);

  if(!news){
    return res.status(500).json({
      success:false,
      message:"News detail not found"
    })
  }

  news = await News.findByIdAndDelete(req.params.id, req.body, {new:true,
    useFindAndModify:true,
    runValidators:true
  });

  res.status(200).json({
    success: true,
    message:"News detail is deleted successfully"
});

}