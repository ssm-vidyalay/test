const express = require("express");
const { getServiceLibrary, getServiceLibraryAll, addServiceLibrary, updateServiceLibrary, deleteServiceLibrary } = require("../controllers/service_library_controllers");
const router = express.Router();

router.route("/services/library/:id").get(getServiceLibrary);
router.route("/services/library/").get(getServiceLibraryAll);
router.route("/services/library/new").post(addServiceLibrary);
router.route("/services/library/:id").put(updateServiceLibrary);
router.route("/services/library/:id").delete(deleteServiceLibrary);

module.exports = router;