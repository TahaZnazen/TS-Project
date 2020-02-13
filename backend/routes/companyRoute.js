const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");
const companyCotroller = require("../controllers/companyController");

router.post("/signup-company", authController.signupCompany);
router.post("/login-company", authController.loginCompany);

router.route("/addCompanyInformation").post(companyCotroller.addCompany);

router.route("/top5").get(companyCotroller.topCompanies);
router.route("/showPosts/:id").get(companyCotroller.findOffers);
router.route("/companyInfo/:id").get(companyCotroller.findCompany);
router.route("/confirmation-company/:id").get(authController.verifeCompany);
router.route("/rejectUser").post(companyCotroller.rejectUser);
router.route("/acceptUser").post(companyCotroller.acceptUser);
router.route("/candidates/:id").get(companyCotroller.CompanyOffersCandidates);
router.route("/image/:id").get(companyCotroller.getimg);
router.route("/forgetPassword").post(authController.forgetPassword);
router.route("/getImage/:id").get(companyCotroller.getImage);
router.route("/forgetPassword").patch(companyCotroller.forgetUpdatePassword);
router
  .route("/getJobsAndCandidates/:id")
  .get(companyCotroller.getJobsAndCandidates);
router
  .route("/startConversation/:userId/:companyId")
  .get(companyCotroller.startConversation);
router.route("/updatePassword/:id").patch(companyCotroller.updatePassword);
router
  .route("/updateCompany/:id")
  .patch(companyCotroller.uploadUserPhoto, companyCotroller.updateCompany);

module.exports = router;
