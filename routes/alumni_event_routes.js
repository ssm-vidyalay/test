const express = require("express");
const { getAlumniEvent, getAlumniEventAll, addAlumniEvent, updateAlumniEvent, deleteAlumniEvent } = require("../controllers/alumni_event_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/alumni/event/:id").get(isAuthenticatedUser, getAlumniEvent);
router.route("/alumni/event/").get(isAuthenticatedUser, getAlumniEventAll);
router.route("/alumni/event/new").post(isAuthenticatedUser, authorizeRoles("admin"), addAlumniEvent);
router.route("/alumni/event/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateAlumniEvent);
router.route("/alumni/event/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteAlumniEvent);

module.exports = router;