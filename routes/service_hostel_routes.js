const express = require("express");
const { getServiceHostel, getServiceHostelAll, addServiceHostel, updateServiceHostel, deleteServiceHostel } = require("../controllers/service_hostel_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/services/hostel/:id").get(isAuthenticatedUser, getServiceHostel);
router.route("/services/hostel/").get(isAuthenticatedUser, getServiceHostelAll);
router.route("/services/hostel/new").post(isAuthenticatedUser, authorizeRoles("admin"), addServiceHostel);
router.route("/services/hostel/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateServiceHostel);
router.route("/services/hostel/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteServiceHostel);

module.exports = router;