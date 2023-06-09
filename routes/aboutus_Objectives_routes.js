const express = require("express");
const { getAboutusObjectives, getAboutusObjectivesAll, addAboutusObjectives, updateAboutusObjectives, deleteAboutusObjectives } = require("../controllers/aboutus_Objectives_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/aboutus/objectives/").get(isAuthenticatedUser, getAboutusObjectivesAll);
router.route("/aboutus/objectives/new").post(isAuthenticatedUser, addAboutusObjectives);
router.route("/aboutus/objectives/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateAboutusObjectives);
router.route("/aboutus/objectives/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteAboutusObjectives);
router.route("/aboutus/objectives/:id").get(isAuthenticatedUser, authorizeRoles("admin"), getAboutusObjectives);

module.exports = router;