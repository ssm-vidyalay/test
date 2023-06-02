const express = require("express");
const { getAlumniEvent, getAlumniEventAll, addAlumniEvent, updateAlumniEvent, deleteAlumniEvent } = require("../controllers/alumni_event_controllers");
const router = express.Router();

router.route("/alumni/event/:id").get(getAlumniEvent);
router.route("/alumni/event/").get(getAlumniEventAll);
router.route("/alumni/event/new").post(addAlumniEvent);
router.route("/alumni/event/:id").put(updateAlumniEvent);
router.route("/alumni/event/:id").delete(deleteAlumniEvent);

module.exports = router;