const express = require("express");
const { getNews, getNewsAll, addNews, updateNews, deleteNews } = require("../controllers/news_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/news/:id").get(getNews);
router.route("/news/").get(getNewsAll);
router.route("/news/new").post(addNews);
router.route("/news/:id").put(updateNews);
router.route("/news/:id").delete(deleteNews);

module.exports = router;