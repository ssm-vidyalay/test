const express = require("express");
const { getServiceHostelImagesSlider, getServiceHostelImagesSliderAll, addServiceHostelImagesSlider, updateServiceHostelImagesSlider, deleteServiceHostelImagesSlider } = require("../controllers/service_hostel_imagesSlider_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/services/hostel/imagesSlider/:id").get(getServiceHostelImagesSlider);
router.route("/services/hostelImagesSlider/").get(getServiceHostelImagesSliderAll);
router.route("/services/hostel/imagesSlider/").post(addServiceHostelImagesSlider);
router.route("/services/hostel/imagesSlider/:id").put(updateServiceHostelImagesSlider);
router.route("/services/hostel/imagesSlider/:id").delete(deleteServiceHostelImagesSlider);

module.exports = router;