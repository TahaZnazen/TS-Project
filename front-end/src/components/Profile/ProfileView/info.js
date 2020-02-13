import React, { Component } from "react";
import "../profileView.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
class info extends Component {
  state = {};
  renderInfo = () => {
    const {
      name,
      photo,
      phone,
      nationality,
      gender,
      location,
      expertise
    } = this.props.data;
    if (this.props.data) {
      return (
        <div className="profileInfo">
          <div className="nestedProfileInfo">
            <div className="profilePhotoContainer">
              <div
                className="profileViewImg"
                style={{ backgroundImage: `url(${photo})` }}
              ></div>
            </div>

            <div className="ProfileText">
              <div className="d-flex calls">
                <h3 className="text-center mb-5">
                  <span
                    style={{
                      fontSize: "40px",
                      fontWeight: "bolder",
                      color: "#ffc107"
                    }}
                  >
                    FULL NAME
                  </span>
                  <br />
                  {name.toUpperCase()}
                </h3>
                <button>
                  <FontAwesomeIcon icon={faPhone} />
                </button>
              </div>

              <h3>
                <span className="mr-2 textTitle">PHONE NUMBER : </span>
                {phone}
              </h3>
              <h3>
                <span className="mr-2 textTitle">GENDER : </span>
                {gender}
              </h3>
              <h3>
                <span className="mr-2 textTitle">NATIONALITY : </span>
                {nationality}
              </h3>
              <h3>
                <span className="mr-2 textTitle">LOCATION : </span>
                {location}
              </h3>
              <h3>
                <span className="mr-2 textTitle">EXPERTISE : </span>
                {expertise}
              </h3>
            </div>
          </div>
        </div>
      );
    } else {
      return <div> loading .....</div>;
    }
  };
  render() {
    return (
      <div>
        <div>{this.renderInfo()}</div>
      </div>
    );
  }
}

export default info;
