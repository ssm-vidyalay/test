const express = require("express");
const { getCourseBA, getCourseBAAll, addCourseBA, updateCourseBA, deleteCourseBA } = require("../controllers/course_BA_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/courses/ba/:id").get(isAuthenticatedUser, getCourseBA);
router.route("/courses/ba/").get(isAuthenticatedUser, getCourseBAAll);
router.route("/courses/ba/new").post(isAuthenticatedUser, authorizeRoles("admin"), addCourseBA);
router.route("/courses/ba/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateCourseBA);
router.route("/courses/ba/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteCourseBA);

module.exports = router;