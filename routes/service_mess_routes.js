const express = require("express");
const { getServiceMess, getServiceMessAll, addServiceMess, updateServiceMess, deleteServiceMess } = require("../controllers/service_mess_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/services/mess/:id").get(isAuthenticatedUser, getServiceMess);
router.route("/services/mess/").get(isAuthenticatedUser, getServiceMessAll);
router.route("/services/mess/new").post(isAuthenticatedUser, authorizeRoles("admin"), addServiceMess);
router.route("/services/mess/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateServiceMess);
router.route("/services/mess/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteServiceMess);

module.exports = router;