const express = require("express");
const { getAlumniSpotlight, getAlumniSpotlightAll, addAlumniSpotlight, updateAlumniSpotlight, deleteAlumniSpotlight } = require("../controllers/alumni_spotlight_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/alumni/spotlight/:id").get(isAuthenticatedUser, getAlumniSpotlight);
router.route("/alumni/spotlight/").get(isAuthenticatedUser, getAlumniSpotlightAll);
router.route("/alumni/spotlight/new").post(isAuthenticatedUser, authorizeRoles("admin"), addAlumniSpotlight);
router.route("/alumni/spotlight/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateAlumniSpotlight);
router.route("/alumni/spotlight/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteAlumniSpotlight);

module.exports = router;