import React, { Component } from "react";
class Educations extends Component {
  state = {};

  renderEducation = () => {
    if (this.props.data) {
      return (
        <div>
          {this.props.data.map((el, i) => {
            return (
              <div id={el._id} key={i}>
                <div>
                  <strong>Start Date: </strong>
                  {el.start}
                </div>
                <div>
                  <strong>End Date: </strong>
                  {el.end}
                </div>
                <div>
                  <strong>Diploma: </strong>
                  {el.diploma}
                </div>
                <div>
                  <strong>Degree: </strong>
                  {el.degree}
                </div>
                <div>
                  <strong>Establishment: </strong>
                  {el.establishment}
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
        <div> {this.renderEducation()}</div>;
      </div>
    );
  }
}

export default Educations;
