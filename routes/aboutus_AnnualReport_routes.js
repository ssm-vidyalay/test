const express = require("express");
const { getAboutusAnnualReport, getAboutusAnnualReportAll, addAboutusAnnualReport, updateAboutusAnnualReport, deleteAboutusAnnualReport} = require("../controllers/aboutus_AnnualReport_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/aboutus/annualReport/:id").get(isAuthenticatedUser,  getAboutusAnnualReport);
router.route("/aboutus/annualReport/").get(isAuthenticatedUser,  getAboutusAnnualReportAll);
router.route("/aboutus/annualReport/new").post(isAuthenticatedUser, authorizeRoles("admin"), addAboutusAnnualReport);
router.route("/aboutus/annualReport/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateAboutusAnnualReport);
router.route("/aboutus/annualReport/:id").delete(isAuthenticatedUser,authorizeRoles("admin"), deleteAboutusAnnualReport);

module.exports = router;