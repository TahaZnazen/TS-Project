const CV = require("../models/CVModel");

//get all users Cvs
exports.getAllCvs = (req, res) => {
  CV.find().then(result => {
    res.json(result);
  });
};

//get Cv with user Id
exports.getOneCv = (req, res) => {
  res.json({
    msg: "profile Id" + req.params.id_User
  });
};

//get Cv with Id Cv

//Add User CV
exports.createCv = (req, res) => {
  let newCv = new CV();
  CV.create(newCv)
    .then(() => {
      res.json({ msg: "new cv Created ", details: newCv });
    })
    .catch(err => {
      res.send(err);
    });
};

//Delete User CV
exports.deleteCv = (req, res) => {};

//Update User CV
exports.updateCv = (req, res) => {
  res.json({ msg: "id profile to update" + req.prams.id_cv });
};
