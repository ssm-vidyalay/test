const express = require("express");
const { getAlumniVideoGallery, getAlumniVideoGalleryAll, addAlumniVideoGallery, updateAlumniVideoGallery, deleteAlumniVideoGallery } = require("../controllers/alumni_videoGallery_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/alumni/videoGallery/:id").get(isAuthenticatedUser, getAlumniVideoGallery);
router.route("/alumni/videoGallery/").get(isAuthenticatedUser, getAlumniVideoGalleryAll);
router.route("/alumni/videoGallery/new").post(isAuthenticatedUser, authorizeRoles("admin"), addAlumniVideoGallery);
router.route("/alumni/videoGallery/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateAlumniVideoGallery);
router.route("/alumni/videoGallery/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteAlumniVideoGallery);

module.exports = router;