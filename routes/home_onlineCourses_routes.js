const express = require("express");
const { getHomeOnlineCourses, getHomeOnlineCoursesAll, addHomeOnlineCourses, updateHomeOnlineCourses, deleteHomeOnlineCourses } = require("../controllers/home_onlineCourses_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/home/onlineCourses/:id").get(getHomeOnlineCourses);
router.route("/home/onlineCourses/").get(getHomeOnlineCoursesAll);
router.route("/home/onlineCourses/").post(addHomeOnlineCourses);
router.route("/home/onlineCourses/:id").put(updateHomeOnlineCourses);
router.route("/home/onlineCourses/:id").delete(deleteHomeOnlineCourses);

module.exports = router;