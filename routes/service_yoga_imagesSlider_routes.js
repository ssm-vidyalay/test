const express = require("express");
const { getServiceYogaImagesSlider, getServiceYogaImagesSliderAll, addServiceYogaImagesSlider, updateServiceYogaImagesSlider, deleteServiceYogaImagesSlider } = require("../controllers/service_yoga_imagesSlider_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/services/yoga/imagesSlider/:id").get(getServiceYogaImagesSlider);
router.route("/services/yogaImagesSlider").get(getServiceYogaImagesSliderAll);
router.route("/services/yoga/imagesSlider/").post( addServiceYogaImagesSlider);
router.route("/services/yoga/imagesSlider/:id").put( updateServiceYogaImagesSlider);
router.route("/services/yoga/imagesSlider/:id").delete( deleteServiceYogaImagesSlider);

module.exports = router;