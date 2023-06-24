const express = require("express");
const { getServiceMessImagesSlider, getServiceMessImagesSliderAll, addServiceMessImagesSlider, updateServiceMessImagesSlider, deleteServiceMessImagesSlider } = require("../controllers/service_mess_imagesSlider_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/services/mess/imagesSlider/:id").get(getServiceMessImagesSlider);
router.route("/services/messImagesSlider/").get(getServiceMessImagesSliderAll);
router.route("/services/mess/imagesSlider/").post(addServiceMessImagesSlider);
router.route("/services/mess/imagesSlider/:id").put(  updateServiceMessImagesSlider);
router.route("/services/mess/imagesSlider/:id").delete(deleteServiceMessImagesSlider);

module.exports = router;