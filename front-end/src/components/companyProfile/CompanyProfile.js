import React, { Component } from "react";
import "./companyProfile.css";
import Stat from "./stat/Stat";
import { filterByCompany, findCompany } from "../../actions/offersAction";
import { connect } from "react-redux";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Offer from "./addOffer/Offer";
import ReactGoogleMaps from "../../views/GoogleMaps/GoogleMaps";
import axios, { patch } from "axios";
import NavBar from "../navbar/NavBar";
class CompanyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPost: false,
      selectedFile: null,
      companyID: "",
      companyCover: null
    };
  }

  addPost() {
    this.setState({
      addPost: !this.state.addPost
    });
  }
  componentDidMount() {
    let data = this.props.authInfo.token;
    console.log(data);
    axios
      .post("http://localhost:8080/api/users/generateID", { token: data })
      .then(res => {
        this.setState({
          companyID: res.data.id
        });
        this.props.filterByCompany(res.data.id);
        this.props.findCompany(res.data.id);

        axios
          .get(
            `http://localhost:8080/api/company/getImage/${this.state.companyID}`
          )
          .then(res => this.setState({ companyCover: res.data.img }))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  // closefrombody() {
  //   if (this.state.addPost) {
  //     this.setState({
  //       addPost: false
  //     });
  //   }
  // }
  // sendImg() {
  //   const data = new FormData();
  //   data.append("file", this.state.coverImg);
  //   axios
  //     .patch(
  //       `http://localhost:8080/api/company/updateCompany/${this.state.companyID}`,
  //       { data }
  //     )
  //     .then(res => {
  //       console.log(res);
  //       // this.setState({coverImg:res.data.})
  //     })
  //     .catch(err => console.log(err));
  // }
  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });
  };
  onClickHandler = () => {
    const data = new FormData();
    data.append("photo", this.state.selectedFile);
    axios
      .patch(
        `http://localhost:8080/api/company/updateCompany/${this.state.companyID}`,
        data
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
    window.location.reload();
  };
  render() {
    return (
      // onClick={this.closefrombody.bind(this)}
      <div className="all">
        <NavBar />
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
              backgroundImage: `url(${this.state.companyCover})`,
              backgroundSize: "100% 100%"
            }}
          >
            {/* multe */}
            <form
              encType="multipart/form-data"
              onSubmit={this.onClickHandler.bind(this)}
            >
              <input
                type="file"
                name="selectedFile"
                onChange={this.onChangeHandler.bind(this)}
              />
              <button
                type="button"
                className="btn btn-success btn-block"
                onClick={this.onClickHandler.bind(this)}
              >
                Upload
              </button>
            </form>
          </div>

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
              <h1 className="card-title text-left">
                {this.props.companyInfo.map(elm => elm.data.name)}
              </h1>
              <h4 className="card-title text-left">
                {this.props.companyInfo.map(elm => elm.data.email)}
              </h4>
            </div>
          </div>
        </div>
        {/* profile pic and name end here  */}
        <Stat />
        <div id="companyProf">
          <div id="jobPosts">
            {this.props.companyOffers &&
              this.props.companyOffers.map(elm =>
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
          <div id="mainPosts">
            <h1>About us</h1>
            <p style={{ fontSize: "18px", padding: "3vh" }}>
              {this.props.companyInfo.map(elm => elm.data.description)}
            </p>
            <h1>location</h1>
            <div style={{ paddingBottom: "20px" }}>
              <ReactGoogleMaps />
            </div>
          </div>
        </div>
        {this.state.addPost && <Offer closeOffer={this.addPost.bind(this)} />}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  companyOffers: state.posts.companyPosts,
  companyInfo: state.posts.companyInfo,
  authInfo: state.auth
});
export default connect(mapStateToProps, { filterByCompany, findCompany })(
  CompanyProfile
);
