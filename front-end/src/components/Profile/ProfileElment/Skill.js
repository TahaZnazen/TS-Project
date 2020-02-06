import React, { Component } from "react";

class Skill extends Component {
  state = {
    nbSkill: this.props.userSkill.length
  };
  renderSkill = () => {
    return (
      <div>
        {this.props.userSkill.map((el, i) => {
          return (
            <div key={i}>
              <div>{el.name}</div>
              <div>{el.level}</div>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <strong>Skill component {this.state.nbSkill}</strong>
        {this.renderSkill()}
      </div>
    );
  }
}

export default Skill;
