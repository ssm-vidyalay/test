const express = require("express");
const { getAboutusSSMV, getAboutusSSMVAll, addAboutusSSMV, updateAboutusSSMV, deleteAboutusSSMV } = require("../controllers/aboutus_SSMV_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/aboutus/SSMV/:id").get(getAboutusSSMV);
router.route("/aboutus/SSMV/").get(getAboutusSSMVAll);
router.route("/aboutus/SSMV/new").post(isAuthenticatedUser, authorizeRoles("admin"), addAboutusSSMV);
router.route("/aboutus/SSMV/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateAboutusSSMV);
router.route("/aboutus/SSMV/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteAboutusSSMV);

module.exports = router;