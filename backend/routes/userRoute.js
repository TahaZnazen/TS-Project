const express = require("express");
const userController = require("./../controllers/userController");
const router = express.Router();
const authController = require("./../controllers/authController");

router.route("/").get(userController.getAllUsers);

router.post("/signup", authController.signup);
router.post("/login", authController.login);

module.exports = router;
