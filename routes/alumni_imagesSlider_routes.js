const express = require("express");
const { getAlumniImagesSlider, getAlumniImagesSliderAll, addAlumniImagesSlider, updateAlumniImagesSlider, deleteAlumniImagesSlider } = require("../controllers/alumni_imagesSlider_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/alumni/imagesSlider/:id").get(getAlumniImagesSlider);
router.route("/alumni/imagesSlider/").get(getAlumniImagesSliderAll);
router.route("/alumni/imagesSlider/").post(addAlumniImagesSlider);
router.route("/alumni/imagesSlider/:id").put(updateAlumniImagesSlider);
router.route("/alumni/imagesSlider/:id").delete(deleteAlumniImagesSlider);

module.exports = router;