const validator = require('validator');
const mongoose = require('mongoose');

const CompanyPostSchema = new mongoose.Schema({
    name: {
        type: String,
       // required: [true, "Please Tell us your Post name"]
    },
    Bio:  {
        type: String,
        required: [true, "Please provide us your post Bio"],
        
    },
    company: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Company'
        } 
    ],
    users: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        }
    ],
    skillRequired: {
        type: [Object],
        required: true
    },
    salaryInterval: String

})






const CompanyPost = mongoose.model('CompanyPost', CompanyPostSchema);

module.exports = CompanyPost;