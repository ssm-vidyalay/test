const express = require("express");
const { getServiceComputerLabImagesSlider, getServiceComputerLabImagesSliderAll, addServiceComputerLabImagesSlider, updateServiceComputerLabImagesSlider, deleteServiceComputerLabImagesSlider } = require("../controllers/service_computerLab_imagesSlider_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/services/computerLab/imagesSlider/:id").get(getServiceComputerLabImagesSlider);
router.route("/services/computerLab/imagesSlider/").get(getServiceComputerLabImagesSliderAll);
router.route("/services/computerLab/imagesSlider/").post(addServiceComputerLabImagesSlider);
router.route("/services/computerLab/imagesSlider/:id").put(updateServiceComputerLabImagesSlider);
router.route("/services/computerLab/imagesSlider/:id").delete(deleteServiceComputerLabImagesSlider);

module.exports = router;