const express = require("express");
const router = express.Router();
const companyPostController = require("../controllers/companyPostController");

router.route("/addPost/:id").post(companyPostController.addPost);
router.route("/postUpdate/:id").patch(companyPostController.findAndUpdate);
router.route("/deletePost/:id").delete(companyPostController.findAndDelete);

module.exports = router;
