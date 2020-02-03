const express = require("express");
const router = express.Router();
const companyCotroller = require("../controllers/companyController");

router.route("/addCompanyInformation").post(companyCotroller.addCompany);
router.route("/updateCompany/:id").patch(companyCotroller.updateCompany);
router.route("/top5").get(companyCotroller.topCompanies);
router.route("/showPosts/:id").get(companyCotroller.findOffers);
router.route("/showCompany/:id").get(companyCotroller.findCompany);
router.route("/candidates/:id").get(companyCotroller.CompanyOffersCandidates);
module.exports = router;
