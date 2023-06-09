const express = require("express");
const { getAlumniLatest, getAlumniLatestAll, addAlumniLatest, updateAlumniLatest, deleteAlumniLatest } = require("../controllers/alumni_latest_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/alumni/latest/:id").get(isAuthenticatedUser, getAlumniLatest);
router.route("/alumni/latest/").get(isAuthenticatedUser, getAlumniLatestAll);
router.route("/alumni/latest/new").post(isAuthenticatedUser, authorizeRoles("admin"), addAlumniLatest);
router.route("/alumni/latest/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateAlumniLatest);
router.route("/alumni/latest/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteAlumniLatest);

module.exports = router;