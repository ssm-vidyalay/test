const express = require("express");
const { getAboutusAnnualReport, getAboutusAnnualReportAll, addAboutusAnnualReport, updateAboutusAnnualReport, deleteAboutusAnnualReport} = require("../controllers/aboutus_AnnualReport_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/aboutus/annualReport/:id").get(getAboutusAnnualReport);
router.route("/aboutus/annualReport/").get(getAboutusAnnualReportAll);
router.route("/aboutus/annualReport/new").post(addAboutusAnnualReport);
router.route("/aboutus/annualReport/:id").put(updateAboutusAnnualReport);
router.route("/aboutus/annualReport/:id").delete(deleteAboutusAnnualReport);

module.exports = router;