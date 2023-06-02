const express = require("express");
const { getServiceComputerLab, getServiceComputerLabAll, addServiceComputerLab, updateServiceComputerLab, deleteServiceComputerLab } = require("../controllers/service_computerLab_controllers");
const router = express.Router();

router.route("/services/computerLab/:id").get(getServiceComputerLab);
router.route("/services/computerLab/").get(getServiceComputerLabAll);
router.route("/services/computerLab/new").post(addServiceComputerLab);
router.route("/services/computerLab/:id").put(updateServiceComputerLab);
router.route("/services/computerLab/:id").delete(deleteServiceComputerLab);

module.exports = router;