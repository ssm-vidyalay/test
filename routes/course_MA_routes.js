const express = require("express");
const { getCourseMA, getCourseMAAll, addCourseMA, updateCourseMA, deleteCourseMA } = require("../controllers/course_MA_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/courses/ma/:id").get(isAuthenticatedUser, getCourseMA);
router.route("/courses/ma/").get(isAuthenticatedUser, getCourseMAAll);
router.route("/courses/ma/new").post(isAuthenticatedUser, authorizeRoles("admin"), addCourseMA);
router.route("/courses/ma/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateCourseMA);
router.route("/courses/ma/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteCourseMA);

module.exports = router;