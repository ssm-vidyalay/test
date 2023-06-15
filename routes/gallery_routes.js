const express = require("express");
const { getGallery, getGalleryAll, addGallery, updateGallery, deleteGallery } = require("../controllers/gallery_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/gallery/").get(getGalleryAll);
router.route("/gallery/:id").get(getGallery);
router.route("/gallery/new").post(addGallery);
router.route("/gallery/:id").put(updateGallery);
router.route("/gallery/:id").delete(deleteGallery);

module.exports = router;