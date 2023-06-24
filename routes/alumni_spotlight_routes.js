const express = require("express");
const { getAlumniSpotlight, getAlumniSpotlightAll, addAlumniSpotlight, updateAlumniSpotlight, deleteAlumniSpotlight } = require("../controllers/alumni_spotlight_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/alumni/spotlight/:id").get(getAlumniSpotlight);
router.route("/alumni/spotlight/").get(getAlumniSpotlightAll);
router.route("/alumni/spotlight/").post(addAlumniSpotlight);
router.route("/alumni/spotlight/:id").put(updateAlumniSpotlight);
router.route("/alumni/spotlight/:id").delete(deleteAlumniSpotlight);

module.exports = router;