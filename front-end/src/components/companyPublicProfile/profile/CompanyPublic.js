import React, { Component } from "react";
import NavBar from "../../navbar/NavBar";
import { findCompany } from "../../../actions/offersAction";
import { connect } from "react-redux";
import "./companyProfile.css";
import ModalExample from "./modal";

class CompanyPublic extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.companyInfo && this.props.findCompany(id);
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="companyInformation">
          <div
            className="companyProfileCover"
            style={{
              backgroundImage: `url(${this.props.companyInfo.map(
                elm => elm.data.photo
              )})`
            }}
          >
            <div className="compData">
              <div className="companyImg"></div>
              <div className="companyName">
                <h1 style={{ color: "	#ffc107" }}>Company Name </h1>
                {this.props.companyInfo.map(elm => (
                  <h1>{elm.data.name.toUpperCase()}</h1>
                ))}
                <h3
                  style={{ color: "#acb4bc", fontWeight: "lighter" }}
                  className="text-center mt-5"
                >
                  <span style={{ color: "black", fontWeight: "bolder" }}>
                    {" "}
                    {"Email : "}
                  </span>
                  {this.props.companyInfo.map(elm => elm.data.email)}
                </h3>
                <h3
                  style={{ color: "#acb4bc", fontWeight: "lighter" }}
                  className="text-center mt-2"
                >
                  <span style={{ color: "black", fontWeight: "bolder" }}>
                    {" Jobs Posted By The Company : "}
                  </span>

                  {this.props.companyInfo.map(elm => elm.data.jobOffers.length)}
                </h3>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <ModalExample
                    description={this.props.companyInfo.map(
                      elm => elm.data.description
                    )}
                    name={this.props.companyInfo.map(elm => elm.data.name)}
                  />
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
  authInfo: state.auth,
  companyInfo: state.posts.companyInfo
});
export default connect(mapStateToProps, { findCompany })(CompanyPublic);
