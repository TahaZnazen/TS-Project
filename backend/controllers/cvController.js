const CV = require("../models/CVModel");

//get all users Cvs
exports.getAllCvs = (req, res) => {
  CV.find().then(result => {
    res.json(result);
  });
};

//get Cv with user Id

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
exports.update = (req, res) => {};
