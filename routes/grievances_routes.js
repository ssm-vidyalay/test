const express = require("express");
const { getGrievance, getGrievanceAll, addGrievance, updateGrievance, deleteGrievance } = require("../controllers/grievances_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/grievances/:id").get(isAuthenticatedUser, getGrievance);
router.route("/grievances/").get(isAuthenticatedUser, getGrievanceAll);
router.route("/grievances/new").post(isAuthenticatedUser, authorizeRoles("admin"), addGrievance);
router.route("/grievances/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateGrievance);
router.route("/grievances/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteGrievance);

module.exports = router;