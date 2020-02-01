const jobOffer = require("../models/JobOfferModel");
require("../models/CompanyModel");

const _ = require("underscore");
exports.addPost = async (req, res) => {
  try {
    req.body.companyName = req.params.id;
    const newPost = await jobOffer.create(req.body);
    res.status(201).json({
      data: { newPost }
    });
  } catch (err) {
    res.json({ err });
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
    res.status(201).json({
      data: result
    });
  } catch (err) {
    res.json({ err });
  }
};

exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await jobOffer
      .findById(id)
      .populate("companyName", ["name", "description"]);
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
    const skills = req.body.skills.split(" ");
    const location = req.body.location;
    const offers = await jobOffer.find({
      location,
      "skillRequired.name": {
        $in: skills
      }
    });
    res.send(offers);
  } catch (err) {
    res.json({ err });
  }
};

// exports.searchBycategory = async (req, res) => {
//   try {
//     req.body.salaryMin = req.body.salaryMin || 0;

//     // req.body.jobType = req.body.jobType || "any"; //
//     console.log(req.body.jobType, req.body.salaryMin);
//     const jobs = await jobOffer.aggregate([
//       {
//         $match: {
//           salaryMin: { $gte: req.body.salaryMin }
//         }
//       },
//       // {
//       //   $match: {
//       //     salaryMin: { $lte: req.body.salaryMax }
//       //   }
//       // },
//       {
//         $match: {
//           jobType: { $eq: req.body.jobType }
//         }
//       }
//     ]);
//     res.json({ jobs });
//   } catch (err) {
//     console.log(err);
//   }
// };

const convertDateToInt = dateString => {
  let result;
  const now = new Date();
  if (dateString === "month ago") {
    result = now.setMonth(now.getMonth() - 1);
  } else if (dateString === "week ago") {
    result = now.setDate(now.getDate() - 1 * 7);
  } else if (dateString === "day ago") {
    result = now.setDate(now.getDate() - 1);
  }
  return result;
};

exports.searchBycategory = async (req, res) => {
  try {
    const time = convertDateToInt(req.body.time);
    // const test = await jobOffer.findOne();
    // console.log(new Date() < test.createdAt);

    req.body.salaryMin = req.body.salaryMin || 0;
    const jobs = await jobOffer.find({
      salaryMin: { $gte: req.body.salaryMin },
      jobType: { $eq: req.body.jobType },
      createdAt: { $gte: new Date(time) }
    });

    res.json({ results: jobs.length, jobs });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
};

// exports.search = async (req, res) => {
//   try {
//     const skills = req.body.skills.split(" ");
//     const location = req.body.location;
//     const offers = await jobOffer.find({
//       $or: [
//         { location },
//         {
//           "skillRequired.name": {
//             $in: skills
//           }
//         },
//         {
//           location,
//           "skillRequired.name": {
//             $in: skills
//           }
//         }
//       ]
//     });
//     res.status(201).send(offers);
//   } catch (err) {
//     res.json({ err });
//   }
// };
