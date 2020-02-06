import React, { Component } from "react";

class Info extends Component {
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
    } = this.props.userInfo;

    const imgSrc = "backend/public/img/users/" + photo;
    console.log(imgSrc);
    return (
      <div>
        <div>
          <h3>{name}</h3>
          <h4>{phone}</h4>
          <h3>{gender}</h3>
          <h4>{nationality}</h4>
          <h4>{location}</h4>
        </div>
        <div>
          <h3>{expertise}</h3>
        </div>
        <div>
          <img src={imgSrc} width="250px" height="250px" />
        </div>
      </div>
    );
  };

  render() {
    console.log("info props :", this.props);

    return (
      <div>
        <div>
          <strong> User Info component </strong>
        </div>
        {this.renderInfo()}
      </div>
    );
  }
}

export default Info;
