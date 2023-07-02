const express = require("express");
const { getServiceMessImagesSlider, getServiceMessImagesSliderAll, addServiceMessImagesSlider, updateServiceMessImagesSlider, deleteServiceMessImagesSlider } = require("../controllers/service_mess_imagesSlider_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/services/messImagesSlider/:id").get(getServiceMessImagesSlider);
router.route("/services/messImagesSlider/").get(getServiceMessImagesSliderAll);
router.route("/services/messImagesSlider/").post(addServiceMessImagesSlider);
router.route("/services/messImagesSlider/:id").put(  updateServiceMessImagesSlider);
router.route("/services/messImagesSlider/:id").delete(deleteServiceMessImagesSlider);

module.exports = router;