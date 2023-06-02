const express = require("express");
const { getGroup, getGroupAll, addGroup, updateGroup, deleteGroup } = require("../controllers/group_controllers");
const router = express.Router();

router.route("/management/group/:id").get(getGroup);
router.route("/management/group/").get(getGroupAll);
router.route("/management/group/new").post(addGroup);
router.route("/management/group/:id").put(updateGroup);
router.route("/management/group/:id").delete(deleteGroup);

module.exports = router;