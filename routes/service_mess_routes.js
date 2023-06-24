const express = require("express");
const { getServiceMess, getServiceMessAll, addServiceMess, updateServiceMess, deleteServiceMess } = require("../controllers/service_mess_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/services/mess/:id").get(getServiceMess);
router.route("/services/mess/").get(getServiceMessAll);
router.route("/services/mess/").post(addServiceMess);
router.route("/services/mess/:id").put(  updateServiceMess);
router.route("/services/mess/:id").delete(deleteServiceMess);

module.exports = router;