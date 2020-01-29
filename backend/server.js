const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
// const User = require('./models/UserModel')
// const Company = require('./models/CompanyModel')
// const CompanyPost = require('./models/CompanyPostModel')
// const CV = require('./models/CVModel')

dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 8080;

//connection data base

//
const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(con => {
    // console.log(con.connections)
    console.log("DATABASE connected");
  });
//runnig server
app.listen(8080, () => console.log("server is running on ", port));
