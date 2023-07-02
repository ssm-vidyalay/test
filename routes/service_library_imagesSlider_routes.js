const express = require("express");
const { getServiceLibraryImagesSlider, getServiceLibraryImagesSliderAll, addServiceLibraryImagesSlider, updateServiceLibraryImagesSlider, deleteServiceLibraryImagesSlider } = require("../controllers/service_library_imagesSlider_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/services/libraryImagesSlider/:id").get(getServiceLibraryImagesSlider);
router.route("/services/libraryImagesSlider/").get(getServiceLibraryImagesSliderAll);
router.route("/services/libraryImagesSlider/").post( addServiceLibraryImagesSlider);
router.route("/services/libraryImagesSlider/:id").put( updateServiceLibraryImagesSlider);
router.route("/services/libraryImagesSlider/:id").delete( deleteServiceLibraryImagesSlider);

module.exports = router;