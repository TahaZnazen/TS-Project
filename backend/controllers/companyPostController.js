const CompanyPost = require("../models/CompanyPostModel");

exports.addPost = async (req, res) => {
  try {
    req.body.company = req.params.id;
    const newPost = await CompanyPost.create(req.body);
    res.status(201).json({
      data: { newPost }
    });
  } catch (err) {
    res.json({ err });
  }
  /////////////////////
};
exports.findOne = id => {
  CompanyPost.find({ _id: id });
};
///////////////////////
exports.findAndDelete = async (req, res) => {
  CompanyPost.findByIdAndRemove(req.params.id).then(() => "List deleted");
};
////////////////
exports.findAndUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedPost = await CompanyPost.findByIdAndUpdate(id, req.body);
    res.json({
      data: { updatedPost }
    });
  } catch (err) {
    res.json({ err });
  }
  /////////////////
};
exports.findAll = id => {
  return CompanyPost.find({ _id: id });
};
