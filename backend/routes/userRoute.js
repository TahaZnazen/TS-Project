const express = require("express");
const userController = require("./../controllers/userController");
const router = express.Router();
const authController = require("./../controllers/authController");
const path = require("path");

router.route("/").get(userController.findAllUsers);
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.route("/:id").get(userController.findOneUser);
router.route("/getjobs/:id").get(userController.findJobs);

router
  .route("/update/:id")
  .patch(userController.uploadUserPhoto, userController.updateUser);
<<<<<<< HEAD
=======
router.route("/image/:id").get(userController.getimg);
router.route("/updatePassword/:id").patch(userController.updatePassword);
>>>>>>> f93c75b3796ac9e9c0b72b370c24a0c69077132e

module.exports = router;
