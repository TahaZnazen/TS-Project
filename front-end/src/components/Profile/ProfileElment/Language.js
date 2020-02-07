import React, { Component } from "react";

class Language extends Component {
  state = {
    nbLanguage: this.props.userLanguages.length,
    languageListDisplay: {}
  };

  deleteLanguage = el => {
    document.getElementById(el.target.id).style.display = "none";
    const languageId = el.target.id;
    //call action
    this.props.deleteLanguage(this.props.cvId, languageId);
  };

  componentWillMount() {
    this.state.languageListDisplay = this.renderLanguage();
    console.log(this.state.languageListDisplay);
  }
  renderLanguage = () => {
    console.log(this.props);
    return (
      <div>
        {this.props.userLanguages.map((el, i) => {
          return (
            <div id={el._id} key={i} ref={React.createRef}>
              <div>{el.name}</div>
              <div>{el.level}</div>
              <button>Edit</button>
              <button id={el._id} onClick={this.deleteLanguage}>
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
          <strong>Language component {this.state.nbLanguage}</strong>
        </div>
        {this.renderLanguage()}
      </div>
    );
  }
}

export default Language;
