import React, { Component } from "react";
class Languages extends Component {
  state = {};
  renderLanguages = () => {
    if (this.props.data) {
      return (
        <div className="insideInfo">
          {this.props.data.map((el, i) => {
            return (
              <div className="contInfo" id={el._id} key={i}>
                <div className="innerInfo">
                  <span>Language : </span>
                  {el.name}
                </div>
                <div className="innerInfo">
                  <span>Level : </span>
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
      <div style={{ width: "100%", height: "100%" }}>
        <div>{this.renderLanguages()}</div>
      </div>
    );
  }
}

export default Languages;
