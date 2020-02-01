const jobOffer = require("../models/JobOfferModel");
const Company = require("./../models/CompanyModel");

const _ = require("underscore");
//
exports.addPost = async (req, res) => {
  try {
    // const company = await Company.findById(req.params.id);
    // if (company.premium === false) {
    // }
    req.body.companyName = req.params.id;
    const newPost = await jobOffer.create(req.body);
    res.status(201).json(newPost);
    return Company.findByIdAndUpdate(
      req.body.companyName,
      { $push: { jobOffers: newPost._id } },
      { new: true, useFindAndModify: false }
    );
  } catch (err) {
    console.log(err);
  }
};

exports.findAll = async (req, res) => {
  try {
    const result = await jobOffer
      .find({})
      .sort({
        createdAt: -1
      })
      .populate("companyName", ["name"]);
    res.status(201).json(result);
  } catch (err) {
    res.json({ err });
  }
};

exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await jobOffer
      .findById(id)
      .populate("companyName", ["name", "description"]); // add ,"photo" when database is correctly filled
    res.status(201).json({
      data: result
    });
    console.log(result.companyName.name);
  } catch (err) {
    res.json({ err });
  }
};

exports.findAndDelete = async (req, res) => {
  try {
    const id = req.params.id;
    await jobOffer.findByIdAndRemove(id);
  } catch (err) {
    res.json({ err });
  }
};

exports.findAndUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedPost = await jobOffer.findByIdAndUpdate(id, req.body);
    res.json({
      data: { updatedPost }
    });
  } catch (err) {
    res.json({ err });
  }
};

exports.search = async (req, res) => {
  try {
    const skills = req.body.skills.toLowerCase().split(" ");
    const location = req.body.location;
    const offers = await jobOffer.find({
      $or: [
        { location },
        {
          "skillRequired.name": {
            $in: skills
          }
        },
        {
          location,
          "skillRequired.name": {
            $in: skills
          }
        }
      ]
    });
    res.status(201).send(offers);
  } catch (err) {
    res.json({ err });
  }
};
// exports.salaryFilter = async (req, res) => {
//   try {
//     const salaryMin = req.body.salaryMin;
//     const salaryMax = req.body.salaryMax;
//     const filters = await jobOffer.find({
//       salaryMin: { $gte: salaryMin }
//     });
//     res.status(201).json({ data: filters });
//   } catch (err) {}
// };
exports.salaryFilter = async (req, res) => {
  try {
    const salarybetween = await jobOffer.aggregate([
      { $match: { salaryMin: { $gte: req.body.salaryMin } } },
      { $match: { salaryMax: { $lte: req.body.salaryMin } } }
    ]);
    res.status(201).json({
      data: salarybetween
    });
  } catch (err) {}
};
