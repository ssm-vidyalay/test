const express = require("express");
const { getNews, getNewsAll, addNews, updateNews, deleteNews } = require("../controllers/news_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/news/:id").get(isAuthenticatedUser, getNews);
router.route("/news/").get(isAuthenticatedUser, getNewsAll);
router.route("/news/new").post(isAuthenticatedUser, authorizeRoles("admin"), addNews);
router.route("/news/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateNews);
router.route("/news/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteNews);

module.exports = router;