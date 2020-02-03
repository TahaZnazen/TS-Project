const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authController");

router.post("/signup-company", authController.signupCompany);
router.post("/login-company", authController.loginCompany);

module.exports = router;
