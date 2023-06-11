const express = require("express");
const { getAboutusFounder, getAboutusFounderAll, addAboutusFounder, updateAboutusFounder, deleteAboutusFounder } = require("../controllers/aboutus_Founder_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/aboutus/founder/:id").get(getAboutusFounder);
router.route("/aboutus/founder/").get(getAboutusFounderAll);
router.route("/aboutus/founder/new").post(addAboutusFounder);
router.route("/aboutus/founder/:id").put(updateAboutusFounder);
router.route("/aboutus/founder/:id").delete(deleteAboutusFounder);

module.exports = router;