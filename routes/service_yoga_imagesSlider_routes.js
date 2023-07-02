const express = require("express");
const { getServiceYogaImagesSlider, getServiceYogaImagesSliderAll, addServiceYogaImagesSlider, updateServiceYogaImagesSlider, deleteServiceYogaImagesSlider } = require("../controllers/service_yoga_imagesSlider_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/services/yogaImagesSlider/:id").get(getServiceYogaImagesSlider);
router.route("/services/yogaImagesSlider").get(getServiceYogaImagesSliderAll);
router.route("/services/yogaImagesSlider/").post( addServiceYogaImagesSlider);
router.route("/services/yogaImagesSlider/:id").put( updateServiceYogaImagesSlider);
router.route("/services/yogaImagesSlider/:id").delete( deleteServiceYogaImagesSlider);

module.exports = router;