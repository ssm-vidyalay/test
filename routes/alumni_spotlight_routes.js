const express = require("express");
const { getAlumniSpotlight, getAlumniSpotlightAll, addAlumniSpotlight, updateAlumniSpotlight, deleteAlumniSpotlight } = require("../controllers/alumni_spotlight_controllers");
const router = express.Router();

router.route("/alumni/spotlight/:id").get(getAlumniSpotlight);
router.route("/alumni/spotlight/").get(getAlumniSpotlightAll);
router.route("/alumni/spotlight/new").post(addAlumniSpotlight);
router.route("/alumni/spotlight/:id").put(updateAlumniSpotlight);
router.route("/alumni/spotlight/:id").delete(deleteAlumniSpotlight);

module.exports = router;