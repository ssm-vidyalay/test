const express = require("express");
const { getDonate, getDonateAll, addDonate, updateDonate, deleteDonate } = require("../controllers/donate_controllers");
const router = express.Router();

router.route("/donate/:id").get(getDonate);
router.route("/donate/").get(getDonateAll);
router.route("/donate/new").post(addDonate);
router.route("/donate/:id").put(updateDonate);
router.route("/donate/:id").delete(deleteDonate);

module.exports = router;