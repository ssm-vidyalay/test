const express = require("express");
const { getManagingCommittee, getManagingCommitteeAll, addManagingCommittee, updateManagingCommittee, deleteManagingCommittee } = require("../controllers/managingCommittee_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/management/managingCommittee/:id").get(isAuthenticatedUser, getManagingCommittee);
router.route("/management/managingCommittee/").get(isAuthenticatedUser, getManagingCommitteeAll);
router.route("/management/managingCommittee/new").post(isAuthenticatedUser, authorizeRoles("admin"), addManagingCommittee);
router.route("/management/managingCommittee/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateManagingCommittee);
router.route("/management/managingCommittee/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteManagingCommittee);

module.exports = router;