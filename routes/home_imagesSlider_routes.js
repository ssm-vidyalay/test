const express = require("express");
const { getHomeImagesSlider, getHomeImagesSliderAll, addHomeImagesSlider, updateHomeImagesSlider, deleteHomeImagesSlider } = require("../controllers/home_imagesSlider_controller");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/homeImagesSlider/:id").get(getHomeImagesSlider);
router.route("/homeImagesSlider/").get(getHomeImagesSliderAll);
router.route("/homeImagesSlider/").post(addHomeImagesSlider);
router.route("/homeImagesSlider/:id").put(updateHomeImagesSlider);
router.route("/homeImagesSlider/:id").delete(deleteHomeImagesSlider);

module.exports = router;