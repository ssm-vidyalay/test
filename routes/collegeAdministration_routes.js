const express = require("express");
const { getCollegeAdministration, getCollegeAdministrationAll, addCollegeAdministration, updateCollegeAdministration, deleteCollegeAdministration } = require("../controllers/collegeAdministration_controllers");
const router = express.Router();

router.route("/management/collegeAdministration/:id").get(getCollegeAdministration);
router.route("/management/collegeAdministration/").get(getCollegeAdministrationAll);
router.route("/management/collegeAdministration/new").post(addCollegeAdministration);
router.route("/management/collegeAdministration/:id").put(updateCollegeAdministration);
router.route("/management/collegeAdministration/:id").delete(deleteCollegeAdministration);

module.exports = router;