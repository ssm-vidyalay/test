const express = require("express");
const { getAlumniTestinomial, getAlumniTestinomialAll, addAlumniTestinomial, updateAlumniTestinomial, deleteAlumniTestinomial } = require("../controllers/alumni_testinomial_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/alumni/testinomials/:id").get(isAuthenticatedUser, getAlumniTestinomial);
router.route("/alumni/testinomials/").get(isAuthenticatedUser, getAlumniTestinomialAll);
router.route("/alumni/testinomials/new").post(isAuthenticatedUser, authorizeRoles("admin"), addAlumniTestinomial);
router.route("/alumni/testinomials/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateAlumniTestinomial);
router.route("/alumni/testinomials/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteAlumniTestinomial);

module.exports = router;