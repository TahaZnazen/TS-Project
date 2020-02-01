const company = require("../models/CompanyModel");
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
