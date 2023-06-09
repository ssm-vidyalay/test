const express = require("express");
const { getLatest, getLatestAll, addLatest, updateLatest, deleteLatest } = require("../controllers/latest_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/latest/:id").get(isAuthenticatedUser, getLatest);
router.route("/latest/").get(isAuthenticatedUser, getLatestAll);
router.route("/latest/new").post(isAuthenticatedUser, authorizeRoles("admin"), addLatest);
router.route("/latest/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateLatest);
router.route("/latest/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteLatest);

module.exports = router;