const express = require("express");
const { getLatest, getLatestAll, addLatest, updateLatest, deleteLatest } = require("../controllers/latest_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/latest/:id").get(getLatest);
router.route("/latest/").get(getLatestAll);
router.route("/latest/new").post(addLatest);
router.route("/latest/:id").put(updateLatest);
router.route("/latest/:id").delete(deleteLatest);

module.exports = router;