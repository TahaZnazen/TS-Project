const jobOffer = require("../models/JobOfferModel");

exports.addPost = async (req, res) => {
  try {
    req.body.company = req.params.id;
    const newPost = await jobOffer.create(req.body);
    res.status(201).json({
      data: { newPost }
    });
  } catch (err) {
    res.json({ err });
  }
  /////////////////////
};
exports.findOne = id => {
  jobOffer.find({ _id: id });
};

exports.findAndDelete = async (req, res) => {
  jobOffer.findByIdAndRemove(req.params.id).then(() => "List deleted");
};
////////////////
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
  /////////////////
};
exports.findAll = id => {
  return jobOffer.find({ _id: id });
};
