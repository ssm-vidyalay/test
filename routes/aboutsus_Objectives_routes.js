const express = require("express");
const { getAboutusObjectives, getAboutusObjectivesAll, addAboutusObjectives, updateAboutusObjectives, deleteAboutusObjectives } = require("../controllers/aboutus_Objectives_controllers");
const router = express.Router();

router.route("/aboutus/objectives/").get(getAboutusObjectivesAll);
router.route("/aboutus/objectives/new").post(addAboutusObjectives);
router.route("/aboutus/objectives/:id").put(updateAboutusObjectives);
router.route("/aboutus/objectives/:id").delete(deleteAboutusObjectives);
router.route("/aboutus/objectives/:id").get(getAboutusObjectives);

module.exports = router;