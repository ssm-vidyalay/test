const express = require("express");
const { getEvent, getEventAll, addEvent, updateEvent, deleteEvent } = require("../controllers/events_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/events/:id").get(getEvent);
router.route("/events/").get(getEventAll);
router.route("/events/new").post(addEvent);
router.route("/events/:id").put(updateEvent);
router.route("/events/:id").delete(deleteEvent);

module.exports = router;