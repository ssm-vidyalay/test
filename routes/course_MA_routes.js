const express = require("express");
const { getCourseMA, getCourseMAAll, addCourseMA, updateCourseMA, deleteCourseMA } = require("../controllers/course_MA_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/courses/ma/:id").get(getCourseMA);
router.route("/courses/ma/").get(getCourseMAAll);
router.route("/courses/ma/").post( addCourseMA);
router.route("/courses/ma/:id").put( updateCourseMA);
router.route("/courses/ma/:id").delete( deleteCourseMA);

module.exports = router;