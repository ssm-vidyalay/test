// Create Token and saving in cookie

// const dotenv = require("dotenv");


// dotenv.config({path:"config/config.env"});


const sendToken = (admission, statusCode, res) => {
    const token = admission.getJWTToken();
  
    // options for cookie
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
    admission,
      token,
    });
  };
  
  module.exports = sendToken;