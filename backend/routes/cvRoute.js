const express = require("express");
const cvController = require("../controllers/cvController");
const router = express.Router();

router.route("/").get(cvController.getAllCvs);
router.route("/:id_User").post(cvController.updateCv);

router.route("/create").post(cvController.createCv);
router.route("/:id_cv").post(cvController.updateCv);
module.exports = router;
