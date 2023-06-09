const express = require("express");
const { getCollegeAdministration, getCollegeAdministrationAll, addCollegeAdministration, updateCollegeAdministration, deleteCollegeAdministration } = require("../controllers/collegeAdministration_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/management/collegeAdministration/").get(isAuthenticatedUser, getCollegeAdministrationAll);
router.route("/management/collegeAdministration/:id").get(isAuthenticatedUser, getCollegeAdministration);
router.route("/management/collegeAdministration/new").post(isAuthenticatedUser, authorizeRoles("admin"), addCollegeAdministration);
router.route("/management/collegeAdministration/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateCollegeAdministration);
router.route("/management/collegeAdministration/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteCollegeAdministration);

module.exports = router;