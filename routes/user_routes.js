const express = require("express");
const {
  registerUser,
  loginUser, logoutUser,verify
} = require("../controllers/user_controllers.js");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");



const router = express.Router();

router.route("/register/").post(registerUser);
router.route("/login/").post(loginUser);
router.route("/logout/").get(logoutUser);
router.route("/verify").get(isAuthenticatedUser, authorizeRoles('admin'), verify);

module.exports = router;