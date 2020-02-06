import React, { Component } from "react";

class Language extends Component {
  state = {
    nbLanguage: this.props.userLanguages.length
  };
  renderLanguage = () => {
    return (
      <div>
        {this.props.userLanguages.map((el, i) => {
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
        <div>
          <strong>Language component {this.state.nbLanguage}</strong>
        </div>
        {this.renderLanguage()}
      </div>
    );
  }
}

export default Language;
