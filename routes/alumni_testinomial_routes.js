const express = require("express");
const { getAlumniTestinomial, getAlumniTestinomialAll, addAlumniTestinomial, updateAlumniTestinomial, deleteAlumniTestinomial } = require("../controllers/alumni_testinomial_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/alumni/testinomials/:id").get(getAlumniTestinomial);
router.route("/alumni/testinomials/").get(getAlumniTestinomialAll);
router.route("/alumni/testinomials/").post( addAlumniTestinomial);
router.route("/alumni/testinomials/:id").put( updateAlumniTestinomial);
router.route("/alumni/testinomials/:id").delete( deleteAlumniTestinomial);

module.exports = router;