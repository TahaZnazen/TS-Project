import React, { Component } from "react";
import JobOfferNav from "./navbar/JobOfferNav";
import "./joboffer.css";
import SearchBar from "../searchBar/SearchBar";
import "react-perfect-scrollbar/dist/css/styles.css";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css
import { connect } from "react-redux";
import { getPosts } from "../../actions/offersAction";
import PropTypes from "prop-types";
import axios from "axios";

class JobOffers extends Component {
  state = {
    currentPage: 1,
    currentPost: null
  };
  changeCurrentPage = numPage => {
    this.setState({ currentPage: numPage });
    //fetch a data
    //or update a query to get data
  };

  componentDidMount() {
    this.props.getPosts();
  }

  //to get one post
  getID(e) {
    axios
      .get(`http://localhost:8080/api/post/showPosts/${e.target.id}`)
      .then(res => this.setState({ currentPost: res.data.data }))
      .catch(err => console.log(err));
    console.log(this.state.currentPost);
  }
  render() {
    return (
      <div id="JobOffermain">
        <JobOfferNav />
        <div id="seachNav">
          <SearchBar />
        </div>
        <div id="MainOffer">
          <div id="MainOfferHolder">
            <nav id="jobOfferCompNav">
              <select>
                <option value="">All Job Types</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <select>
                <option value="">Post Any Time</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <select>
                <option value="">Salary</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <select>
                <option value="">Location</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <select>
                <option value="">More</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </nav>

            <div id="miniOffers">
              <div className="miniJobDesc  " style={{ width: "30%" }}>
                {/* mini offer component */}

                {this.props.posts !== [] &&
                  this.props.posts.map(elm =>
                    elm.map((job, i) => (
                      <div
                        className="card jobdiscription"
                        style={{ padding: "0" }}
                      >
                        <div
                          className="card-body"
                          id={job._id}
                          onClick={this.getID.bind(this)}
                        >
                          <div
                            style={{ pointerEvents: "none" }}
                            className="d-flex"
                          >
                            <div
                              className="companyPhoto"
                              style={{
                                pointerEvents: "none",
                                marginRight: "1vw"
                              }}
                            ></div>
                            <div
                              style={{ pointerEvents: "none" }}
                              className=".flex-column "
                            >
                              <h3 style={{ pointerEvents: "none" }}>
                                {job.companyName && job.companyName.name}
                              </h3>
                              <h5
                                style={{ pointerEvents: "none" }}
                                className="text-left"
                              >
                                {job.title && job.title}
                              </h5>
                            </div>
                          </div>
                          <h5
                            style={{ pointerEvents: "none" }}
                            className="text-left mt-2"
                          >
                            {job.salaryMin && job.salaryMax
                              ? job.salaryMin + " $ => " + job.salaryMax + " $"
                              : ""}
                          </h5>
                          <div
                            style={{ pointerEvents: "none" }}
                            className="d-flex justify-content-around"
                          >
                            <strong
                              style={{ pointerEvents: "none" }}
                              className="text-left "
                            >
                              {job.jobType && job.jobType}
                            </strong>
                            <strong
                              style={{ pointerEvents: "none" }}
                              className="text-left "
                            >
                              {job.location && job.location}
                            </strong>
                          </div>
                        </div>
                        <div
                          className="card-footer text-right "
                          style={{
                            backgroundColor: "	#2eb85c",
                            pointerEvents: "none"
                          }}
                        >
                          <small
                            style={{ color: "white", pointerEvents: "none" }}
                          >
                            {job.createdAt
                              .split("T")
                              .join("  ")
                              .slice(0, 17)
                              .split("  ")
                              .join("--AT--")}
                          </small>
                        </div>
                      </div>
                    ))
                  )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    color: "black"
                  }}
                >
                  <Pagination
                    currentPage={this.state.currentPage}
                    totalPages={100}
                    changeCurrentPage={this.changeCurrentPage}
                    theme="square-fill"
                  />
                </div>

                {/* mini offer component  end here*/}
              </div>

              <div
                className="miniJobDesc "
                style={{
                  width: "70%",
                  padding: "0"
                }}
              >
                <div id="companyCover"></div>
                <div
                  className="bordBtm"
                  style={{ display: "flex", padding: "20px 50px" }}
                >
                  <div className="jobBigDescription">
                    <h4 style={{ fontWeight: "lighter" }}>
                      {this.state.currentPost &&
                        this.state.currentPost.companyName.name}
                    </h4>
                    <h3 style={{ fontSize: "30px" }}>
                      {this.state.currentPost && this.state.currentPost.title}
                    </h3>
                    <h5 style={{ fontSize: "19px" }}>
                      {(this.state.currentPost &&
                        this.state.currentPost.type) ||
                        "undefined"}
                    </h5>
                    <p>
                      {" "}
                      {(this.state.currentPost &&
                        this.state.currentPost.salary) ||
                        "undefined"}
                    </p>
                  </div>
                  <button id="applyBtn">Apply Now</button>
                </div>
                <div id="jobDis">
                  <p>
                    {this.state.currentPost &&
                      this.state.currentPost.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
JobOffers.propTypes = {
  posts: PropTypes.array
};
const mapStateToProps = state => ({
  posts: state.posts.posts
});
export default connect(mapStateToProps, { getPosts })(JobOffers);
