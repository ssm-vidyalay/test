const express = require("express");
const {
  registerAdmission,
  loginAdmission, logoutAdmission
} = require("../controllers/admission_controllers.js");

const router = express.Router();

router.route("/admission/register/").post(registerAdmission);
router.route("/admission/login/").post(loginAdmission);
router.route("/admission/logout/").get(logoutAdmission);

module.exports = router;
