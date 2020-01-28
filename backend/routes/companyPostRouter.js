const express = require("express");
const router = express.Router();
const companyPostController = require("../controllers/companyPostController");

// router.route('/').get

router.route("/addPost/:id").post(companyPostController.addPost);
// .get(companyPostController.findAll)
router.route("/postUpdate/:id").patch(companyPostController.findAndUpdate);
router.route("/deletePost/:id").delete(companyPostController.findAndDelete);
// router.get("/:id", userController)(req, res) => {
//     companyPostController.findAll(req.params.id.toLowerCase()).then(result => {
//       res.status(200).send(result);
//     });
//   });
//   router.patch('/:id' , (req,res) => {
//       let obj = req.body
//   })

module.exports = router;
