import React, { Component } from "react";
import NavBar from "../navbar/NavBar";
import "./companyDashboardProfile.css";
import { connect } from "react-redux";
import axios from "axios";
import { getCompanyJobs } from "../../actions/offersAction";
import CandidatesModal from "./CandidatesModal";
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
      .then(res => {
        this.props.getCompanyJobs(res.data.id);
      })

      .catch(err => console.log(err));
  }

  getID(e) {
    console.log(e.target.id);
    this.setState({
      idOffre: e.target.id
    });
    axios
      .get(`http://localhost:8080/api/post/showPosts/${e.target.id}`)
      .then(res => {
        console.log(res.data, "/////");
        this.setState({ currentPost: res.data.data });
      })
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
                {this.props.posts[0] &&
                  this.props.posts[0]["Offers"].map(elm => (
                    <div className="jobDescrpPlace mb-1">
                      <div
                        id={elm._id}
                        onClick={this.getID.bind(this)}
                        className="card-body"
                        style={{ height: "10vh" }}
                      >
                        <h3
                          style={{
                            pointerEvents: "none"
                          }}
                          className="card-title text-center"
                        >
                          {elm.title}
                        </h3>
                      </div>
                      <div
                        style={{
                          pointerEvents: "none"
                        }}
                        className="card-footer text-right "
                        style={{ backgroundColor: "	#20a8d8" }}
                      >
                        <small
                          style={{ color: "white", pointerEvents: "none" }}
                        >
                          {elm.createdAt.replace("T", " ").slice(0, 16)}
                        </small>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div
              className="jobDescriptionDashboard d-flex-column"
              style={{ width: "70%", height: "90vh", padding: "10px" }}
            >
              {/* this one need to be populated with the condidates */}
              <CandidatesModal
                candidates={
                  this.state.currentPost && this.state.currentPost.candidates
                }
                style={{ position: "absolute" }}
              />
              <h1>
                {this.props.posts[0] &&
                  "COMPANY : " + this.props.posts[0].Company.name.toUpperCase()}
              </h1>
              <div className="jobInformation">
                <h1 className="text-left ml-2 mt-3">
                  {this.state.currentPost.title &&
                    "JOB TITLE : " + this.state.currentPost.title}
                </h1>
                <h5 className="text-left ml-2 mt-3">
                  {this.state.currentPost.location &&
                    "LOCATION : " + this.state.currentPost.location}
                </h5>
                <h1 className="text-right mr-2 mt-3 ">
                  {this.state.currentPost.title &&
                    "JOB Type : " + this.state.currentPost.jobType}
                </h1>
                <h4 className="text-right mr-2 mt-3 ">
                  {this.state.currentPost.salaryMin &&
                    "SALARY : " +
                      this.state.currentPost.salaryMin +
                      " -> " +
                      this.state.currentPost.salaryMax}
                </h4>
                <h4
                  style={{ position: "absolute", bottom: "0", width: "100%" }}
                  className="text-center mr-2 mt-3 "
                >
                  {this.state.currentPost.createdAt &&
                    "FROM : " +
                      this.state.currentPost.createdAt
                        .replace("T", " ")
                        .slice(0, 16)
                        .replace(" ", " -AT- ") +
                      " -TO- " +
                      this.state.currentPost.expirationDate
                        .replace("T", " ")
                        .slice(0, 16)
                        .replace(" ", " -AT- ")}
                </h4>
                <div className="jobDescription">
                  {this.state.currentPost.description && (
                    <div className="nestedJobDescription">
                      <h4>{this.state.currentPost.description}</h4>
                    </div>
                  )}
                </div>
              </div>
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
