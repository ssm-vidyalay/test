const express = require("express");
const { getServiceHostel, getServiceHostelAll, addServiceHostel, updateServiceHostel, deleteServiceHostel } = require("../controllers/service_hostel_controllers");
const router = express.Router();

router.route("/services/hostel/:id").get(getServiceHostel);
router.route("/services/hostel/").get(getServiceHostelAll);
router.route("/services/hostel/new").post(addServiceHostel);
router.route("/services/hostel/:id").put(updateServiceHostel);
router.route("/services/hostel/:id").delete(deleteServiceHostel);

module.exports = router;