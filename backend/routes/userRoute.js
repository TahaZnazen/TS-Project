const express = require("express");
const userController = require("./../controllers/userController");
const router = express.Router();
const authController = require("./../controllers/authController");

router.route("/").get(userController.findAllUsers);
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.route("/:id").get(userController.findOneUser);
router.route("/getjobs/:id").get(userController.findJobs);

router
  .route("/update/:id")
  .patch(userController.uploadUserPhoto, userController.updateUser);
// router.route("/upload/:id").get(userController.getUserImg);
// router.route("/getimg/:imgPath").get(userController.getimg);
router.route("/image/:id").get(userController.getimg);

module.exports = router;
