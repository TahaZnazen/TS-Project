const express = require("express");
const cvController = require("./../controllers/cvController");
const router = express.Router();

router.route("/").get(cvController.getAllCvs);

router.route("/create").post(cvController.createCv);
module.exports = router;
