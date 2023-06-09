const express = require("express");
const { getServiceYoga, getServiceYogaAll, addServiceYoga, updateServiceYoga, deleteServiceYoga } = require("../controllers/service_yoga_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/services/yoga/:id").get(isAuthenticatedUser, getServiceYoga);
router.route("/services/yoga/").get(isAuthenticatedUser, getServiceYogaAll);
router.route("/services/yoga/new").post(isAuthenticatedUser, authorizeRoles("admin"), addServiceYoga);
router.route("/services/yoga/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateServiceYoga);
router.route("/services/yoga/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteServiceYoga);

module.exports = router;