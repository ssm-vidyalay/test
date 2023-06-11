const express = require("express");
const { getHomeOnlineCourses, getHomeOnlineCoursesAll, addHomeOnlineCourses, updateHomeOnlineCourses, deleteHomeOnlineCourses } = require("../controllers/home_onlineCourses_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/home/onlineCourses/:id").get(isAuthenticatedUser, getHomeOnlineCourses);
router.route("/home/onlineCourses/").get(isAuthenticatedUser, getHomeOnlineCoursesAll);
router.route("/home/onlineCourses/new").post(isAuthenticatedUser, authorizeRoles("admin"), addHomeOnlineCourses);
router.route("/home/onlineCourses/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateHomeOnlineCourses);
router.route("/home/onlineCourses/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteHomeOnlineCourses);

module.exports = router;