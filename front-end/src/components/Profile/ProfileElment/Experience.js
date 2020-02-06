import React, { Component } from "react";

class Experience extends Component {
  state = {
    nbExperience: this.props.userExperience.length,
    experienceListDisplay: {}
  };
  deleteExperience = el => {
    document.getElementById(el.target.id).style.display = "none";
    const experienceId = el.target.id;
    this.props.deleteExperience(this.props.cvId, experienceId);
  };

  componentWillMount() {
    this.state.experienceListDisplay = this.renderExperience();
  }
  renderExperience = () => {
    return (
      <div>
        {this.props.userExperience.map((el, i) => {
          return (
            <div id={el._id} key={i}>
              <div>{el.start}</div>
              <div>{el.end}</div>
              <div>{el.companyName}</div>
              <div>{el.position}</div>
              <div>{el.task}</div>
              <button>Edit</button>
              <button id={el._id} onClick={this.deleteExperience}>
                delete
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
        <div>
          <strong>Experience component {this.state.nbExperience}</strong>
        </div>
        {this.renderExperience()}
      </div>
    );
  }
}

export default Experience;
