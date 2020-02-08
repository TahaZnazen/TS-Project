const company = require("../models/CompanyModel");
const offers = require("../models/JobOfferModel");
const users = require("../models/UserModel");
const ObjectId = require("mongoose").Types.ObjectId;
exports.addCompany = async (req, res) => {
  try {
    const newCompany = await company.create(req.body);
    res.status(201).json({
      data: { newCompany }
    });
  } catch (err) {
    res.json({ err });
  }
};
exports.updateCompany = async (req, res) => {
  try {
    console.log(req.body);
    if (req.file) {
      req.body.photo = req.file.filename;
    }
    // const test = await user.findOneAndUpdate({ _id: req.params.id }, req.body);
    const id = req.params.id;
    const updateCompany = await company.findByIdAndUpdate(id, req.body);
    res.json({
      data: { updateCompany }
    });
  } catch (err) {
    res.json({ err });
  }
};
exports.topCompanies = async (req, res) => {
  try {
    const top5 = await company
      .find({})
      //   .sort({ jobOffers: jobOffers.length })
      .limit(5);
    res.status(201).json({
      data: top5
    });
  } catch (err) {
    res.json({ err });
  }
};
exports.findOffers = async (req, res) => {
  try {
    const id = req.params.id;
    const companyToShowOffers = await company
      .findById(id)
      .populate("jobOffers");

    res
      .status(201)
      .json(companyToShowOffers.jobOffers)
      .sort({ createdAt: -1 });
  } catch (err) {
    res.json({ err });
  }
};
exports.findCompany = async (req, res) => {
  try {
    const id = req.params.id;
    const companyToShow = await company.findById(id);
    res.status(201).json({ data: companyToShow });
  } catch (err) {
    res.json({ err });
  }
};
exports.CompanyOffersCandidates = async (req, res) => {
  try {
    const companyId = req.params.id;

    const OffersPostedByTheCompany = await offers
      .find({
        companyName: companyId
      })
      .populate("candidates");
    res.json({ OffersPostedByTheCompany });
  } catch (err) {
    res.json({ err });
  }
};
