import React, { Component } from "react";
class Experiences extends Component {
  state = {};
  renderExperience = () => {
    if (this.props.data) {
      return (
        <div>
          {this.props.data.map((el, i) => {
            return (
              <div id={el._id} key={i}>
                <div>
                  <strong>start Date: </strong>
                  {el.start}
                </div>
                <div>
                  <strong>end Date: </strong>
                  {el.end}
                </div>
                <div>
                  <strong>Company Name: </strong>
                  {el.companyName}
                </div>
                <div>
                  <strong>Position: </strong>
                  {el.position}
                </div>
                <div>
                  <strong>Task: </strong>
                  {el.task}
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
        <div>{this.renderExperience()}</div>
      </div>
    );
  }
}

export default Experiences;
