const express = require("express");
const { getAlumniAbout, getAlumniAboutAll, addAlumniAbout, updateAlumniAbout, deleteAlumniAbout } = require("../controllers/alumni_about_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/alumni/about/:id").get(getAlumniAbout);
router.route("/alumni/about/").get(getAlumniAboutAll);
router.route("/alumni/about/new").post(addAlumniAbout);
router.route("/alumni/about/:id").put(updateAlumniAbout);
router.route("/alumni/about/:id").delete(deleteAlumniAbout);

module.exports = router;