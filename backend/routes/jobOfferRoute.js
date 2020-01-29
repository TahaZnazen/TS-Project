const express = require("express");
const router = express.Router();
const jobOfferController = require("../controllers/jobOfferController");

router.route("/addPost/:id").post(jobOfferController.addPost);
router.route("/postUpdate/:id").patch(jobOfferController.findAndUpdate);
router.route("/deletePost/:id").delete(jobOfferController.findAndDelete);

module.exports = router;
