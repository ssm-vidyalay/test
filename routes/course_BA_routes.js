const express = require("express");
const { getCourseBA, getCourseBAAll, addCourseBA, updateCourseBA, deleteCourseBA } = require("../controllers/course_BA_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/courses/ba/:id").get(getCourseBA);
router.route("/courses/ba/").get(getCourseBAAll);
router.route("/courses/ba/").post( addCourseBA);
router.route("/courses/ba/:id").put( updateCourseBA);
router.route("/courses/ba/:id").delete( deleteCourseBA);

module.exports = router;