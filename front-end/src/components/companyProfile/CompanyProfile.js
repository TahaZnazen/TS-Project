import React, { Component } from "react";
import "./companyProfile.css";
import Stat from "./stat/Stat";
import { filterByCompany, findCompany } from "../../actions/offersAction";
import { connect } from "react-redux";
import { faPlus, faCamera } from "@fortawesome/free-solid-svg-icons";
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
        <div className="card mb-3 firstProfile">
          <div
            style={{
              width: "90wh",
              height: "60vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              position: "relative",
              backgroundImage: `url(https://coverfiles.alphacoders.com/115/115027.jpg)`,
              backgroundSize: "100% 100%"
            }}
          >
            <div
              style={{
                height: "50vh",
                width: "40vw",
                position: "absolute",
                bottom: "-25vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "white",
                boxShadow: "0px 28px 24px #c8ced3"
              }}
            >
              <div
                style={{
                  width: "20vh",
                  height: "20vh",
                  backgroundColor: "pink",
                  marginRight: "3vh",
                  position: "relative",
                  top: "-7vh",
                  backgroundImage: `url(${this.state.companyCover})`,
                  backgroundSize: "100% 100%",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <form
                  encType="multipart/form-data"
                  onSubmit={this.onClickHandler.bind(this)}
                >
                  <input
                    type="file"
                    name="selectedFile"
                    style={{ width: "40px", backgroundColor: "transparent" }}
                    onChange={this.onChangeHandler.bind(this)}
                  />
                  <FontAwesomeIcon
                    icon={faCamera}
                    style={{
                      fontSize: "30px",
                      position: "absolute",
                      left: "8.5vh",
                      top: "0",
                      pointerEvents: "none"
                    }}
                  />

                  {this.state.selectedFile && (
                    <button
                      type="button"
                      className="btn btn-success btn-block"
                      onClick={this.onClickHandler.bind(this)}
                    >
                      Upload
                    </button>
                  )}
                </form>
              </div>
              <div>
                <h1
                  style={{ color: "#3399ff" }}
                  className="card-title text-left mb-5"
                >
                  COMPANY NAME <br />
                  <span style={{ color: "black" }}>
                    {this.props.companyInfo.map(elm =>
                      elm.data.name.toUpperCase()
                    )}
                  </span>
                </h1>

                <h4
                  style={{ fontSize: "25px", fontWeight: "bolder" }}
                  className="card-title text-left"
                >
                  Email :{this.props.companyInfo.map(elm => elm.data.email)}
                </h4>
              </div>
            </div>
            {/* multe */}
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
                        {offer.jobType ? offer.jobType : "no type defined"}
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
