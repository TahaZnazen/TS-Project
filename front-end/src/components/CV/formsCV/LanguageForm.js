import React, { Component } from "react";
import { connect } from "react-redux";
import { addLanguage } from "../../../actions/cvActions";
import { Link, BrowserRouter as Router, Redirect } from "react-router-dom";

class Language extends Component {
  state = {
    displayLanguage: [],
    key: 0
  };

  handleSubmit = e => {
    e.preventDefault();
    let newLanguage = {};
    newLanguage.name = e.target.name.value;
    newLanguage.level = e.target.level.value;

    const id = this.props.cvUser[0]._id;
    this.props.addLanguage(id, newLanguage);
  };

  renderForm = () => {
    console.log("form Language rendered");
    return (
      <div
        key={this.state.key}
        className="container col-lg-8 mx-auto text-center"
      >
        <form onSubmit={this.handleSubmit}>
          <div className="row col-lg-10 mx-auto">
            <div className="col-lg-4 text-left">
              <label>Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                required
              />
            </div>
            <div className="col-lg-4 text-left">
              <label>Level</label>
              <select id="level">
                <option value="Native">Native</option>
                <option value="Basic">Basic</option>
                <option value="Advanced">Advanced</option>
                <option value="Fluent">Fluent</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-info">
            Save
          </button>
          <br />
        </form>
        <hr />
      </div>
    );
  };

  renderNewForm() {
    const languageForms = this.state.displayLanguage;
    languageForms.push(this.renderForm());
    let newKey = this.state.key + 1;
    this.setState({
      displayLanguage: languageForms,
      key: newKey
    });
  }
  buttonDisplay() {
    if (this.state.displayLanguage.length > 0) {
      return (
        <div className="container text-center">
          <Router>
            <Link>
              <button type="submit" className="btn btn-info">
                Education
              </button>
            </Link>
            <Link>
              <button type="submit" className="btn btn-info">
                langguage
              </button>
            </Link>
          </Router>
        </div>
      );
    }
    return null;
  }
  render() {
    return (
      <div>
        <div className="card animated fadeInLeft">
          <div className="card-body">
            <h3 className="card-title">Language</h3>
            <hr />
            <div>
              <button
                className="btn btn-info"
                onClick={this.renderNewForm.bind(this)}
              >
                add Language
              </button>
            </div>
          </div>
        </div>

        <div>{this.state.displayLanguage}</div>
        <div>{this.buttonDisplay()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps, { addLanguage })(Language);
