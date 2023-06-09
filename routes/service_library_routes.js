const express = require("express");
const { getServiceLibrary, getServiceLibraryAll, addServiceLibrary, updateServiceLibrary, deleteServiceLibrary } = require("../controllers/service_library_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/services/library/:id").get(isAuthenticatedUser, getServiceLibrary);
router.route("/services/library/").get(isAuthenticatedUser, getServiceLibraryAll);
router.route("/services/library/new").post(isAuthenticatedUser, authorizeRoles("admin"), addServiceLibrary);
router.route("/services/library/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateServiceLibrary);
router.route("/services/library/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteServiceLibrary);

module.exports = router;