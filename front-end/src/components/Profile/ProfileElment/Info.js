import React, { Component } from "react";
class Info extends Component {
  state = {
    userPhoto: this.props.userInfo.photo
  };
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

    //const imgSrc = photo;
    const imgSrc =
      "backend/public/img/users/user-5e32e9fe0e58762ad85f5089-1580926012168.jpeg";
    //console.log(imgSrc);
    console.log(photo);
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
          <img
            alt="user photo"
            src={
              "http://localhost:8080/images/user-5e32e9fe0e58762ad85f5089-1580925768929.jpeg"
            }
            width="250px"
            height="250px"
          />
        </div>
        <button>Edit</button>
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
