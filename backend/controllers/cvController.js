const CV = require("../models/CVModel");

//get all users Cvs DONE !
exports.getAllCvs = (req, res) => {
  CV.find().then(result => {
    res.status(200).json({
      status: "success",
      data: result
    });
  });
};

//Get Cv with Id DONE ! //cvs//id_cv
exports.getOneCv = (req, res) => {
  const _id = req.params.id_Cv;
  CV.find({ _id }).then(result => {
    res.status(200).json({
      status: "success",
      data: result
    });
  });
};

//Get Cv with user ID Done //cvs/user_id
exports.getCvByUserID = (req, res) => {
  try {
    const _id = req.prams.id_user;
    CV.find({ _id: user_id }).then(cv => {
      res.status(200).json({
        status: "success",
        msg: "CV for user " + _id,
        data: cv
      });
    });
  } catch (err) {
    rs.send(err);
  }
};

//Delete one Cv DONE ! //cvs//id_cv
exports.deleteCv = (req, res) => {
  try {
    const _id = req.params.id_Cv;
    CV.deleteOne({ _id }).then(() => {
      res.status(200).json({
        status: "success",
        data: "deleted CV Id" + _id
      });
    });
  } catch (err) {
    res.send(err);
  }
};

//Add User CV DONE ! //cvs
exports.createCv = (req, res) => {
  try {
    let newCv = new CV();
    CV.create(newCv)
      .then(() => {
        res.json({ tatus: "success", msg: "new cv Created ", details: newCv });
      })
      .catch(err => {
        res.send(err);
      });
  } catch (err) {
    res.send(err);
  }
};

/////////////////////////////////////// Experience  operation ///////////////////////////////////////////////////

//Add experience to Cv Done ! //cvs/cv_id/id_experience
exports.addExperience = (req, res) => {
  try {
    let _id = req.params.id_Cv;
    let experience = req.body;
    CV.findOneAndUpdate({ _id }, { $push: { experience: experience } }).then(
      () => {
        res.status(201).json({
          status: "success",
          msg: "Experience add to CV with id " + _id
        });
      }
    );
  } catch (err) {
    res.send(err);
  }
};

//Delete experience from CV Done ! //cvs//id_cv/id_experience
exports.deleteExperience = (req, res) => {
  try {
    const _id = req.params.id_Cv;
    const id_experience = req.params.id_experience;
    CV.findOneAndUpdate(
      { _id },
      { $pull: { experience: { _id: id_experience } } }
    ).then(() => {
      res.status(200).json({
        status: "success",
        msg:
          "Experience with id " +
          id_experience +
          " has been deleted from CV with id " +
          _id
      });
    });
  } catch (err) {
    res.send(err);
  }
};

//Get All experience by Cv Done !
exports.getAllExperiences = (req, res) => {
  try {
    let _id = req.params.id_Cv;
    CV.findById({ _id })
      .select("-education -skills -language")
      .then(experienceArray => {
        res.status(200).json({
          status: "success",
          msg: "All Experiences for CV with id " + _id,
          data: experienceArray
        });
      });
  } catch (err) {
    res.send(err);
  }
};

//Update one User experience Done ! //cvs/id_cv/id_experience NO
exports.updateOneExperience = (req, res) => {
  try {
    const _id = req.params.id_Cv;
    const id_experience = req.params.id_experience;
    const { start, end, companyName, position, task } = req.body;
    console.log(_id);
    console.log(id_experience);
    CV.findOne({ _id, "experience.$._id": id_experience }).then(data => {
      console.log(data);
    });
    CV.findOneAndUpdate(
      { _id, "experience.$._id": id_experience }, //$ to target element inside the array
      {
        $set: {
          "experience.start": start,
          "experience.end": end,
          "experience.companyName": companyName,
          "experience.position": position,
          "experience.task": task
        }
      }
    ).then(data => {
      console.log(data);
      res.status(200).json({
        status: "success",
        msg:
          "Experience with id " +
          id_experience +
          " has been updated from CV with id " +
          _id
      });
    });
  } catch (err) {
    res.send(err);
  }
};

//Update All User experience Done
//cvs/id_cv
exports.updateAllExperiences = (req, res) => {
  try {
    _id = req.params.id_Cv;
    updatedExperiences = req.body.updatedExperiences;
    console.log(updatedExperiences);
    CV.findByIdAndUpdate(
      { _id },
      {
        $set: { experience: updatedExperiences }
      }
    ).then(() => {
      res.status(200).json({
        status: "sucess",
        msg: "all experiences are updated of the user with " + _id,
        data: updatedExperiences
      });
    });
  } catch (err) {
    res.send(err);
  }
};

/////////////////////////////////////// Education  operation ///////////////////////////////////////////////////

//Add education to Cv Done ! //cvs/cv_id/id_experience
exports.addEducation = (req, res) => {
  try {
    let _id = req.params.id_Cv;
    let education = req.body.data;
    CV.findOneAndUpdate({ _id }, { $push: { education: education } }).then(
      () => {
        res.status(201).json({
          status: "success",
          msg: "Education added to CV with id " + _id
        });
      }
    );
  } catch (err) {
    res.send(err);
  }
};

//Delete education from CV Done ! //cvs//id_cv/id_experience
exports.deleteEducation = (req, res) => {
  try {
    const _id = req.params.id_Cv;
    const id_education = req.params.id_education;
    CV.findOneAndUpdate(
      { _id },
      { $pull: { education: { _id: id_education } } }
    ).then(() => {
      res.status(200).json({
        status: "success",
        msg:
          "Education with id " +
          id_education +
          " has been deleted from CV with id " +
          _id
      });
    });
  } catch (err) {
    res.send(err);
  }
};

//Get All education by Cv Done !
exports.getAllEducations = (req, res) => {
  try {
    let _id = req.params.id_Cv;
    CV.findById({ _id })
      .select("-experience -skills -language")
      .then(educationArray => {
        res.status(200).json({
          status: "success",
          msg: "All Educations for CV with id " + _id,
          data: educationArray
        });
      });
  } catch (err) {
    res.send(err);
  }
};

//Update one User education  Done ! //cvs/id_cv/id_experience NO
exports.updateOneEducation = (req, res) => {
  try {
    const _id = req.params.id_Cv;
    const id_education = req.params.id_education;
    const { start, end, diploma, degree, establishment } = req.body.education;
    console.log(req.body.education);

    CV.findOneAndUpdate(
      { _id, "education.$._id": id_education }, //$ to target element inside the array
      {
        $set: {
          "education.start": start,
          "education.end": end,
          "education.diploma": diploma,
          "education.degree": degree,
          "education.establishment": establishment
        }
      }
    ).then(() => {
      //console.log(data);
      res.status(200).json({
        status: "success",
        msg:
          "Education with id " +
          id_education +
          " has been updated from CV with id " +
          _id
      });
      console.log("hello i'm here 2");
    });
  } catch (err) {
    res.send(err);
  }
};

//Update All User education//cvs/id_cv/educations DONE !!
exports.updateAllEducations = (req, res) => {
  try {
    _id = req.params.id_Cv;
    updatedEducations = req.body.updatedEducations;
    console.log(updatedEducations);
    CV.findByIdAndUpdate(
      { _id },
      {
        $set: { education: updatedEducations }
      }
    ).then(() => {
      res.status(200).json({
        status: "sucess",
        msg: "all experiences are updated of the user with " + _id,
        data: updatedEducations
      });
    });
  } catch (err) {
    res.send(err);
  }
};

/////////////////////////////////////// Skills  operation ///////////////////////////////////////////////////

//Add education to Cv Done ! //cvs/cv_id/addSkill
exports.addSkill = (req, res) => {
  try {
    let _id = req.params.id_Cv;
    let skill = req.body.data;
    CV.findOneAndUpdate({ _id }, { $push: { skills: skill } }).then(() => {
      res.status(201).json({
        status: "success",
        msg: "skill added to CV with id " + _id
      });
    });
  } catch (err) {
    res.send(err);
  }
};

//Delete education from CV Done ! //cvs/id_cv/skill/id_skill
exports.deleteSkill = (req, res) => {
  try {
    const _id = req.params.id_Cv;
    const id_skill = req.params.id_skill;
    CV.findOneAndUpdate({ _id }, { $pull: { skills: { _id: id_skill } } }).then(
      () => {
        res.status(200).json({
          status: "success",
          msg:
            "skill with id " +
            id_skill +
            " has been deleted from CV with id " +
            _id
        });
      }
    );
  } catch (err) {
    res.send(err);
  }
};

//Get All education by Cv Done !
exports.getAllSkills = (req, res) => {
  try {
    let _id = req.params.id_Cv;
    CV.findById({ _id })
      .select("-experience -education -language")
      .then(skillsArray => {
        res.status(200).json({
          status: "success",
          msg: "All Skills for CV with id " + _id,
          data: skillsArray
        });
      });
  } catch (err) {
    res.send(err);
  }
};

//Update one User education  Done ! //cvs/id_cv/id_experience NO
exports.updateOneSkill = (req, res) => {
  try {
    const _id = req.params.id_Cv;
    const id_skill = req.params.id_skill;
    const { name, level } = req.body;

    CV.findOneAndUpdate(
      { _id, "skills.$._id": id_skill }, //$ to target element inside the array
      {
        $set: {
          "skills.name": name,
          "skills.level": level
        }
      }
    ).then(() => {
      res.status(200).json({
        status: "success",
        msg:
          "skill with id " +
          id_skill +
          " has been updated from CV with id " +
          _id
      });
      console.log("hello i'm here 2");
    });
  } catch (err) {
    res.send(err);
  }
};

//Update All User education//cvs/id_cv/skills  Done !!!
exports.updateAllSKills = (req, res) => {
  try {
    _id = req.params.id_Cv;
    updatedSkills = req.body.updatedSkills;
    CV.findByIdAndUpdate(
      { _id },
      {
        $set: { skills: updatedSkills }
      }
    ).then(() => {
      res.status(200).json({
        status: "sucess",
        msg: "all skills are updated of the user with " + _id,
        data: updatedSkills
      });
    });
  } catch (err) {
    res.send(err);
  }
};

/////////////////////////////////////// Language  operation ///////////////////////////////////////////////////

//Add education to Cv Done ! //cvs/cv_id/addSkill
exports.addLanguage = (req, res) => {
  try {
    let _id = req.params.id_Cv;
    let language = req.body.data;
    CV.findOneAndUpdate({ _id }, { $push: { language: language } }).then(() => {
      res.status(201).json({
        status: "success",
        msg: "language added to CV with id " + _id
      });
    });
  } catch (err) {
    res.send(err);
  }
};

//Delete education from CV Done ! //cvs/id_cv/skill/id_language DONE
exports.deleteLanguage = (req, res) => {
  try {
    const _id = req.params.id_Cv;
    const id_language = req.params.id_language;
    CV.findOneAndUpdate(
      { _id },
      { $pull: { language: { _id: id_language } } }
    ).then(() => {
      res.status(200).json({
        status: "success",
        msg:
          "language with id " +
          id_language +
          " has been deleted from CV with id " +
          _id
      });
    });
  } catch (err) {
    res.send(err);
  }
};

//Get All education by Cv Done !
exports.getAllLanguages = (req, res) => {
  try {
    let _id = req.params.id_Cv;
    CV.findById({ _id })
      .select("-experience -education -skills")
      .then(languageArray => {
        res.status(200).json({
          status: "success",
          msg: "All languages for CV with id " + _id,
          data: languageArray
        });
      });
  } catch (err) {
    res.send(err);
  }
};

//Update one User language  Done ! //cvs/id_cv/id_experience NO
exports.updateOneLanguage = (req, res) => {
  try {
    const _id = req.params.id_Cv;
    const id_language = req.params.id_language;
    const { name, level } = req.body;
    CV.findOneAndUpdate(
      { _id, "language.$._id": id_language }, //$ to target element inside the array
      {
        $set: {
          "language.name": name,
          "language.level": level
        }
      }
    ).then(() => {
      res.status(200).json({
        status: "success",
        msg:
          "skill with id " +
          id_language +
          " has been updated from CV with id " +
          _id
      });
      console.log("hello i'm here 2");
    });
  } catch (err) {
    res.send(err);
  }
};

//Update All User education//cvs/id_cv/languages  Done !!!
exports.updateAllLanguages = (req, res) => {
  try {
    _id = req.params.id_Cv;
    updatedLanguages = req.body.updatedLanguages;
    CV.findByIdAndUpdate(
      { _id },
      {
        $set: { language: updatedLanguages }
      }
    ).then(() => {
      res.status(200).json({
        status: "sucess",
        msg: "all Languages are updated of the user with " + _id,
        data: updatedLanguages
      });
    });
  } catch (err) {
    res.send(err);
  }
};
