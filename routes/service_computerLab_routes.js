const express = require("express");
const { getServiceComputerLab, getServiceComputerLabAll, addServiceComputerLab, updateServiceComputerLab, deleteServiceComputerLab } = require("../controllers/service_computerLab_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/services/computerLab/:id").get(isAuthenticatedUser, getServiceComputerLab);
router.route("/services/computerLab/").get(isAuthenticatedUser, getServiceComputerLabAll);
router.route("/services/computerLab/new").post(isAuthenticatedUser, authorizeRoles("admin"), addServiceComputerLab);
router.route("/services/computerLab/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateServiceComputerLab);
router.route("/services/computerLab/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteServiceComputerLab);

module.exports = router;