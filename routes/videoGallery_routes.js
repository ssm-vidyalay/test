const express = require("express");
const { getVideoGallery, getVideoGalleryAll, addVideoGallery, updateVideoGallery, deleteVideoGallery } = require("../controllers/videoGallery_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/videoGallery/").get(getVideoGalleryAll);
router.route("/videoGallery/:id").get(getVideoGallery);
router.route("/videoGallery/new").post(addVideoGallery);
router.route("/videoGallery/:id").put(updateVideoGallery);
router.route("/videoGallery/:id").delete(deleteVideoGallery);

module.exports = router;