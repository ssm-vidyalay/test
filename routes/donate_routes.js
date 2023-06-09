const express = require("express");
const { getDonate, getDonateAll, addDonate, updateDonate, deleteDonate } = require("../controllers/donate_controllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/donate/:id").get(isAuthenticatedUser, getDonate);
router.route("/donate/").get(isAuthenticatedUser, getDonateAll);
router.route("/donate/new").post(isAuthenticatedUser, authorizeRoles("admin"), addDonate);
router.route("/donate/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateDonate);
router.route("/donate/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteDonate);

module.exports = router;