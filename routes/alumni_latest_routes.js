const express = require("express");
const { getAlumniLatest, getAlumniLatestAll, addAlumniLatest, updateAlumniLatest, deleteAlumniLatest } = require("../controllers/alumni_latest_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/alumni/latest/:id").get(getAlumniLatest);
router.route("/alumni/latest/").get(getAlumniLatestAll);
router.route("/alumni/latest/new").post(addAlumniLatest);
router.route("/alumni/latest/:id").put(updateAlumniLatest);
router.route("/alumni/latest/:id").delete(deleteAlumniLatest);

module.exports = router;