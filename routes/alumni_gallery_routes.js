const express = require("express");
const { getAlumniGallery, getAlumniGalleryAll, addAlumniGallery, updateAlumniGallery, deleteAlumniGallery } = require("../controllers/alumni_gallery_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/alumni/gallery/:id").get(getAlumniGallery);
router.route("/alumni/gallery/").get(getAlumniGalleryAll);
router.route("/alumni/gallery/").post(addAlumniGallery);
router.route("/alumni/gallery/:id").put(updateAlumniGallery);
router.route("/alumni/gallery/:id").delete(deleteAlumniGallery);

module.exports = router;