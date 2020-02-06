import React, { Component } from "react";

class Skill extends Component {
  state = {
    nbSkill: this.props.userSkill.length
  };
  deleteSkill = el => {
    console.log("delete button work", el.target.id);
    document.getElementById(el.target.id).style.display = "none";
    const skillId = el.target.id;
    this.props.deleteSkill(this.props.cvId, skillId);
  };

  componentWillMount() {
    this.state.skillListDisplay = this.renderSkill();
    console.log(this.state.skillListDisplay);
  }

  renderSkill = () => {
    return (
      <div>
        {this.props.userSkill.map((el, i) => {
          console.log("h");
          return (
            <div id={el._id} key={i}>
              <div>{el.name}</div>
              <div>{el.level}</div>
              <button id={el._id}>Edit</button>
              <button id={el._id} onClick={this.deleteSkill}>
                Delete
              </button>
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

        {this.state.skillListDisplay}
      </div>
    );
  }
}

export default Skill;
