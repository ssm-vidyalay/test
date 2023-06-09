const express = require("express");
const { getAboutusFounder, getAboutusFounderAll, addAboutusFounder, updateAboutusFounder, deleteAboutusFounder } = require("../controllers/aboutus_Founder_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/aboutus/founder/:id").get(isAuthenticatedUser, getAboutusFounder);
router.route("/aboutus/founder/").get(isAuthenticatedUser, getAboutusFounderAll);
router.route("/aboutus/founder/new").post(isAuthenticatedUser, authorizeRoles("admin"), addAboutusFounder);
router.route("/aboutus/founder/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateAboutusFounder);
router.route("/aboutus/founder/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteAboutusFounder);

module.exports = router;