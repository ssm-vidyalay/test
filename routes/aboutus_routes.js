const express = require("express");
const { getAboutus, getAboutusAll, addAboutus, updateAboutus, deleteAboutus } = require("../controllers/aboutus_controllers");
const router = express.Router();

router.route("/aboutus/:id").get(getAboutus);
router.route("/aboutus/").get(getAboutusAll);
router.route("/aboutus/new").post(addAboutus);
router.route("/aboutus/:id").put(updateAboutus);
router.route("/aboutus/:id").delete(deleteAboutus);

module.exports = router;