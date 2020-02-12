import React, { Component } from "react";
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
        <div>
          <div>
            <div>
              <img alt="user photo" src={photo} width="250px" height="250px" />
            </div>
            <div>
              <h3>
                <strong>Full Name: </strong>
                {name}
              </h3>
              <h3>
                <strong>Phone Number: </strong>
                {phone}
              </h3>
              <h3>
                <strong>Gender: </strong>
                {gender}
              </h3>
              <h3>
                <strong>Nationality: </strong>
                {nationality}
              </h3>
              <h3>
                <strong>Location: </strong>
                {location}
              </h3>
            </div>
            <h3>
              <strong>Expertise: </strong>
              {expertise}
            </h3>
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
