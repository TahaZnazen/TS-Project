import React, { Component } from "react";
class Skills extends Component {
  state = {};
  renderSkills = () => {
    if (this.props.data) {
      return (
        <div className="insideInfo">
          {this.props.data.map((el, i) => {
            return (
              <div className="contInfo" id={el._id} key={i}>
                <div className="innerInfo">
                  <span>Tech skill : </span>
                  {el.name}
                </div>
                <div className="innerInfo">
                  <span>level : </span>
                  {el.level}
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
        {/* <div>
          <strong>Skills View component</strong>
        </div>
        <hr /> */}
        <div>{this.renderSkills()}</div>
      </div>
    );
  }
}

export default Skills;
