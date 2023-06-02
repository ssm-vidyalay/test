const express = require("express");
const { getServiceYoga, getServiceYogaAll, addServiceYoga, updateServiceYoga, deleteServiceYoga } = require("../controllers/service_yoga_controllers");
const router = express.Router();

router.route("/services/yoga/:id").get(getServiceYoga);
router.route("/services/yoga/").get(getServiceYogaAll);
router.route("/services/yoga/new").post(addServiceYoga);
router.route("/services/yoga/:id").put(updateServiceYoga);
router.route("/services/yoga/:id").delete(deleteServiceYoga);

module.exports = router;