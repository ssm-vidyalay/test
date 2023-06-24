const express = require("express");
const { getGrievance, getGrievanceAll, addGrievance, updateGrievance, deleteGrievance } = require("../controllers/grievances_controllers");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/grievances/:id").get(getGrievance);
router.route("/grievances/").get(getGrievanceAll);
router.route("/grievances/").post( addGrievance);
router.route("/grievances/:id").put( updateGrievance);
router.route("/grievances/:id").delete( deleteGrievance);

module.exports = router;