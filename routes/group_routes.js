const express = require("express");
const { getGroup, getGroupAll, addGroup, updateGroup, deleteGroup } = require("../controllers/group_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/management/group/:id").get(isAuthenticatedUser, getGroup);
router.route("/management/group/").get(isAuthenticatedUser, getGroupAll);
router.route("/management/group/new").post(isAuthenticatedUser, authorizeRoles("admin"), addGroup);
router.route("/management/group/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateGroup);
router.route("/management/group/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteGroup);

module.exports = router;