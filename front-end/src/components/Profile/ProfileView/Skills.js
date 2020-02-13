import React, { Component } from "react";
class Skills extends Component {
  state = {};
  renderSkills = () => {
    if (this.props.data) {
      return (
        <div>
          {this.props.data.map((el, i) => {
            return (
              <div id={el._id} key={i}>
                <div>
                  <strong>Tech skill: </strong>
                  {el.name}
                </div>
                <div>
                  <strong>level: </strong>
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
      <div>
        <div>
          <strong>Skills View component</strong>
        </div>
        <hr />
        <div>{this.renderSkills()}</div>
      </div>
    );
  }
}

export default Skills;
