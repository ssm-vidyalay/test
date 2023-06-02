const express = require("express");
const { getAlumniVideoGallery, getAlumniVideoGalleryAll, addAlumniVideoGallery, updateAlumniVideoGallery, deleteAlumniVideoGallery } = require("../controllers/alumni_videoGallery_controllers");
const router = express.Router();

router.route("/alumni/videoGallery/:id").get(getAlumniVideoGallery);
router.route("/alumni/videoGallery/").get(getAlumniVideoGalleryAll);
router.route("/alumni/videoGallery/new").post(addAlumniVideoGallery);
router.route("/alumni/videoGallery/:id").put(updateAlumniVideoGallery);
router.route("/alumni/videoGallery/:id").delete(deleteAlumniVideoGallery);

module.exports = router;