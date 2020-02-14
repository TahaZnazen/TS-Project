import React, { Component } from "react";
class Experiences extends Component {
  state = {};
  renderExperience = () => {
    if (this.props.data) {
      return (
        <div className="insideInfo">
          {this.props.data.map((el, i) => {
            return (
              <div className="dataFlow" id={el._id} key={i}>
                <div className="innerInfo">
                  <span>Company Name : </span>
                  {el.companyName}
                </div>
                <div className="innerInfo">
                  <span>Position : </span>
                  {el.position}
                </div>
                <div className="innerInfo">
                  <span>Task : </span>
                  {el.task}
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
        <div>{this.renderExperience()}</div>
      </div>
    );
  }
}

export default Experiences;
