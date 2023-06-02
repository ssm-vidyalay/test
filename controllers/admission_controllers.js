const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Admission = require("../models/admission_models");
const sendToken = require("../utils/jwtToken");

// Register a Admission
exports.registerAdmission = catchAsyncErrors(async (req, res, next) => {
    
    const { name, email, password } = req.body;
  
    const admission = await Admission.create({
      name,
      email,
      password
    });
  
    sendToken(admission, 201, res);
  });

  // Login Admission
exports.loginAdmission = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // checking if user has given password and email both

  if (!email || !password) {
    return next(new ErrorHander("Please Enter Email & Password", 400));
  }

  const admission = await Admission.findOne({ email }).select("+password");

  if (!admission) {
    return next(new ErrorHander("Invalid email or password", 401));
  }

  const isPasswordMatched = await admission.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHander("Invalid email or password", 401));
  }

  sendToken(admission, 200, res);
});

// Logout Admission
exports.logoutAdmission = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});