const express = require("express");
const { getAlumniGallery, getAlumniGalleryAll, addAlumniGallery, updateAlumniGallery, deleteAlumniGallery } = require("../controllers/alumni_gallery_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/alumni/gallery/:id").get(isAuthenticatedUser, getAlumniGallery);
router.route("/alumni/gallery/").get(isAuthenticatedUser, getAlumniGalleryAll);
router.route("/alumni/gallery/new").post(isAuthenticatedUser, authorizeRoles("admin"), addAlumniGallery);
router.route("/alumni/gallery/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateAlumniGallery);
router.route("/alumni/gallery/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteAlumniGallery);

module.exports = router;