const express = require("express");
const { getAboutusSSMV, getAboutusSSMVAll, addAboutusSSMV, updateAboutusSSMV, deleteAboutusSSMV } = require("../controllers/aboutus_SSMV_controllers");
const router = express.Router();

router.route("/aboutus/SSMV/:id").get(getAboutusSSMV);
router.route("/aboutus/SSMV/").get(getAboutusSSMVAll);
router.route("/aboutus/SSMV/new").post(addAboutusSSMV);
router.route("/aboutus/SSMV/:id").put(updateAboutusSSMV);
router.route("/aboutus/SSMV/:id").delete(deleteAboutusSSMV);

module.exports = router;