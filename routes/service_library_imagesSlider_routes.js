const express = require("express");
const { getServiceLibraryImagesSlider, getServiceLibraryImagesSliderAll, addServiceLibraryImagesSlider, updateServiceLibraryImagesSlider, deleteServiceLibraryImagesSlider } = require("../controllers/service_library_imagesSlider_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/services/library/imagesSlider/:id").get(getServiceLibraryImagesSlider);
router.route("/services/libraryImagesSlider/").get(getServiceLibraryImagesSliderAll);
router.route("/services/library/imagesSlider/new").post( addServiceLibraryImagesSlider);
router.route("/services/library/imagesSlider/:id").put( updateServiceLibraryImagesSlider);
router.route("/services/library/imagesSlider/:id").delete( deleteServiceLibraryImagesSlider);

module.exports = router;