const express = require("express");
const { getNotice, getNoticeAll, addNotice, updateNotice, deleteNotice } = require("../controllers/notice_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/notice/:id").get(isAuthenticatedUser, getNotice);
router.route("/notice/").get(isAuthenticatedUser, getNoticeAll);
router.route("/notice/new").post(isAuthenticatedUser, authorizeRoles("admin"), addNotice);
router.route("/notice/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateNotice);
router.route("/notice/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteNotice);

module.exports = router;