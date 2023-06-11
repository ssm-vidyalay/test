const express = require("express");
const { getAboutusPrinciple, getAboutusPrincipleAll, addAboutusPrinciple, updateAboutusPrinciple, deleteAboutusPrinciple } = require("../controllers/aboutus_Principle_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/aboutus/principle/:id").get(getAboutusPrinciple);
router.route("/aboutus/principle/").get(getAboutusPrincipleAll);
router.route("/aboutus/principle/new").post(isAuthenticatedUser, authorizeRoles("admin"), addAboutusPrinciple);
router.route("/aboutus/principle/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateAboutusPrinciple);
router.route("/aboutus/principle/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteAboutusPrinciple);

module.exports = router;