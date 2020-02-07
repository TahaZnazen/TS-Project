const express = require("express");
const premiumController = require("./../controllers/premiumController");
const router = express.Router();
// router.route("/").get(userController.findAllUsers);

router.route("/get-premium/:id").get(premiumController.getPremium);

module.exports = router;
