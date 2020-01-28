const express = require("express");
const router = express.Router();
const jobOfferModel = require("../controllers/jobOfferController");

router.route("/addPost/:id").post(jobOfferModel.addPost);
router.route("/postUpdate/:id").patch(jobOfferModel.findAndUpdate);
router.route("/deletePost/:id").delete(jobOfferModel.findAndDelete);

module.exports = router;
