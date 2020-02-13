import React, { Component } from "react";
class Educations extends Component {
  state = {};

  renderEducation = () => {
    if (this.props.data) {
      return (
        <div className="insideInfo">
          {this.props.data.map((el, i) => {
            return (
              <div className="dataFlow" id={el._id} key={i}>
                <div className="innerInfo">
                  <span>Diploma : </span>
                  {el.diploma}
                </div>
                <div className="innerInfo">
                  <span>Degree : </span>
                  {el.degree}
                </div>
                <div className="innerInfo">
                  <span>Establishment : </span>
                  {el.establishment}
                </div>
                <div className="time">
                  <div>
                    <span>Start Date : </span>
                    {el.start}
                  </div>
                  <div>
                    <span>End Date : </span>
                    {el.end}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div> loading .....</div>;
    }
  };
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div> {this.renderEducation()}</div>
      </div>
    );
  }
}

export default Educations;
