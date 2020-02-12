import React, { Component } from "react";
class Languages extends Component {
  state = {};
  renderLanguages = () => {
    if (this.props.data) {
      return (
        <div>
          {this.props.data.map((el, i) => {
            return (
              <div id={el._id} key={i}>
                <div>
                  <strong>Language: </strong>
                  {el.name}
                </div>
                <div>
                  <strong>Level: </strong>
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
    console.log("educaton view component ", this.props);
    return (
      <div>
        <div>{this.renderLanguages()}</div>
      </div>
    );
  }
}

export default Languages;
