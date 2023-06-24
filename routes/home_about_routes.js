const express = require("express");
const { getHomeAbout, getHomeAboutAll, addHomeAbout, updateHomeAbout, deleteHomeAbout } = require("../controllers/home_about_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/home/about/:id").get(getHomeAbout);
router.route("/home/about/").get(getHomeAboutAll);
router.route("/home/about/").post(addHomeAbout);
router.route("/home/about/:id").put(updateHomeAbout);
router.route("/home/about/:id").delete(deleteHomeAbout);

module.exports = router;