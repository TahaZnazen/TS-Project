import React, { Component } from "react";
import "./companyProfile.css";
import Stat from "./stat/Stat";
import { getPosts } from "../../actions/offersAction";
import { connect } from "react-redux";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Offer from "./addOffer/Offer";
class CompanyProfile extends Component {
  state = {
    addPost: false
  };
  addPost() {
    this.setState({
      addPost: !this.state.addPost
    });
  }
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    return (
      <div className="all">
        <button
          onClick={this.addPost.bind(this)}
          type="button"
          className="btn btn-pill btn-success mb-3 btnadd"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <div className="card mb-3">
          <div
            style={{
              width: "100wh",
              height: "300px",
              backgroundImage:
                "url(http://www.ellendriscoll.net/sites/default/files/distantweb.jpg?1392682694)",
              backgroundSize: "100% 100%"
            }}
          ></div>
          <div
            className="card-body d-flex "
            style={{ backgroundColor: "#ebedef" }}
          >
            <div
              style={{
                width: "7vh",
                height: "7vh",
                backgroundColor: "pink",
                marginRight: "3vh",
                marginTop: "1vh"
              }}
            ></div>
            <div>
              <h1 className="card-title text-left">Company Name PlaceHolder</h1>
              <h4 className="card-title text-left">
                Company location PlaceHolder
              </h4>
            </div>
          </div>
        </div>
        {/* profile pic and name end here  */}
        <Stat />
        <div id="companyProf">
          <div id="jobPosts">
            {this.props.posts &&
              this.props.posts.map(elm =>
                elm.map(offer => (
                  <div className="card jobdiscription">
                    <div className="card-body">
                      <h3 className="card-title text-center">{offer.title}</h3>
                      <h5 className="card-title text-left">
                        {offer.type ? offer.type : "no type defined"}
                      </h5>
                      <strong className="card-title text-left">
                        {offer.salaryMin
                          ? offer.salaryMin
                          : "no salaryMin defined"}
                        -->
                        {offer.salaryMax
                          ? offer.salaryMax
                          : "no salaryMax defined"}
                      </strong>

                      <h5 className="card-title text-right">
                        {offer.location
                          ? offer.location
                          : "no location defined"}
                      </h5>
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
                ))
              )}
          </div>
          <div id="mainPosts"></div>
        </div>
        {this.state.addPost && <Offer />}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  posts: state.posts.posts
});
export default connect(mapStateToProps, { getPosts })(CompanyProfile);
