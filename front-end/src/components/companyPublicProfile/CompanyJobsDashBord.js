import React, { Component } from "react";
import NavBar from "../navbar/NavBar";
import "./companyDashboardProfile.css";
import { connect } from "react-redux";
import axios from "axios";
import { getCompanyJobs } from "../../actions/offersAction";
class CompanyJobsDashBord extends Component {
  state = {
    idUser: "",
    idOffre: "",
    currentPost: ""
  };
  componentDidMount() {
    let token = this.props.authInfo.token;
    axios
      .post("http://localhost:8080/api/users/generateID", { token: token })
      //invoke he function that will get the posts for this company
      .then(res => this.props.getCompanyJobs(res.data.id))
      .catch(err => console.log(err));
  }

  getID(e) {
    this.setState({
      idOffre: e.target.id
    });
    axios
      .get(`http://localhost:8080/api/post/showPosts/${e.target.id}`)
      .then(res => this.setState({ currentPost: res.data.data }))
      .catch(err => console.log(err));
    console.log(this.state.currentPost);
  }
  render() {
    return (
      <div>
        <NavBar />
        <div
          className="d-flex justify-content-center align-items-center mt-2"
          style={{ width: "100vw", height: "95vh" }}
        >
          <div
            className="d-flex fullCompanyProfile"
            style={{ width: "80vw", height: "90vh" }}
          >
            <div
              className="d-flex-column dashBordJobPlace"
              style={{
                width: "30%",
                height: "90vh"
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "20%",
                  position: "relative",
                  display: "flex",
                  justifyContent: "flex-start"
                }}
              >
                <div
                  style={{
                    width: "45%",
                    height: "20vh",
                    backgroundColor: "pink",
                    borderRadius: "50%",
                    position: "absolute",
                    left: "-30px",
                    top: "-25px"
                  }}
                ></div>
              </div>
              <div
                style={{
                  overflowY: "scroll",
                  height: "71vh",
                  width: "100%"
                }}
              >
                {[1, 2, 3, 4, 5, 6].map(elm => (
                  <div className="jobDescrpPlace mb-1">
                    <div className="card-body" style={{ height: "10vh" }}>
                      <h3 className="card-title text-center">job title</h3>
                    </div>
                    <div
                      className="card-footer text-right "
                      style={{ backgroundColor: "	#20a8d8" }}
                    >
                      <small style={{ color: "white" }}>
                        Last updated 3 mins ago
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="jobDescriptionDashboard d-flex-column"
              style={{ width: "70%", height: "90vh" }}
            >
              <h1 className="mt-4">COMPANY NAME</h1>
              <div className="jobInformation"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  posts: state.posts.companyPostsAndCondidates,
  authInfo: state.auth
});
export default connect(mapStateToProps, { getCompanyJobs })(
  CompanyJobsDashBord
);
