const express = require("express");
const { getNotice, getNoticeAll, addNotice, updateNotice, deleteNotice } = require("../controllers/notice_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/notice/:id").get(getNotice);
router.route("/notice/").get(getNoticeAll);
router.route("/notice/new").post(addNotice);
router.route("/notice/:id").put(updateNotice);
router.route("/notice/:id").delete(deleteNotice);

module.exports = router;