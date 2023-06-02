const express = require("express");
const { getManagingCommittee, getManagingCommitteeAll, addManagingCommittee, updateManagingCommittee, deleteManagingCommittee } = require("../controllers/managingCommittee_controllers");
const router = express.Router();

router.route("/management/managingCommittee/:id").get(getManagingCommittee);
router.route("/management/managingCommittee/").get(getManagingCommitteeAll);
router.route("/management/managingCommittee/new").post(addManagingCommittee);
router.route("/management/managingCommittee/:id").put(updateManagingCommittee);
router.route("/management/managingCommittee/:id").delete(deleteManagingCommittee);

module.exports = router;