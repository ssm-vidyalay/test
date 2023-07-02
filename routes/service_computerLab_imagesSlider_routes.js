const express = require("express");
const { getServiceComputerLabImagesSlider, getServiceComputerLabImagesSliderAll, addServiceComputerLabImagesSlider, updateServiceComputerLabImagesSlider, deleteServiceComputerLabImagesSlider } = require("../controllers/service_computerLab_imagesSlider_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/services/computerLabImagesSlider/:id").get(getServiceComputerLabImagesSlider);
router.route("/services/computerLabImagesSlider/").get(getServiceComputerLabImagesSliderAll);
router.route("/services/computerLabImagesSlider/").post(addServiceComputerLabImagesSlider);
router.route("/services/computerLabImagesSlider/:id").put(updateServiceComputerLabImagesSlider);
router.route("/services/computerLabImagesSlider/:id").delete(deleteServiceComputerLabImagesSlider);

module.exports = router;