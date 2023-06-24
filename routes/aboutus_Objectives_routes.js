const express = require("express");
const { getAboutusObjectives, getAboutusObjectivesAll, addAboutusObjectives, updateAboutusObjectives, deleteAboutusObjectives } = require("../controllers/aboutus_Objectives_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/aboutus/objectives/").get(getAboutusObjectivesAll);
router.route("/aboutus/objectives/:id").get(getAboutusObjectives);
router.route("/aboutus/objectives/").post(addAboutusObjectives);
router.route("/aboutus/objectives/:id").put(updateAboutusObjectives);
router.route("/aboutus/objectives/:id").delete(deleteAboutusObjectives);


module.exports = router;