import React, { Component } from "react";
import { connect } from "react-redux";
import { addSkill } from "../../../actions/cvActions";
import { Link, BrowserRouter as Router, Redirect } from "react-router-dom";

class Skills extends Component {
  state = {
    displaySkill: [],
    key: 0
  };

  handleSubmit = e => {
    e.preventDefault();
    let newSkill = {};
    newSkill.name = e.target.name.value;
    newSkill.level = e.target.level.value;

    const id = this.props.cvUser[0]._id;
    this.props.addSkill(id, newSkill);
  };

  renderForm = () => {
    console.log("form skills rendered");
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
                <option value="Basic">Basic</option>
                <option value="Intermidate">Intermidate</option>
                <option value="Advanced">Advanced</option>
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
    const experienceForms = this.state.displaySkill;
    experienceForms.push(this.renderForm());
    let newKey = this.state.key + 1;
    this.setState({
      displaySkill: experienceForms,
      key: newKey
    });
  }
  buttonDisplay() {
    if (this.state.displaySkill.length > 0) {
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
            <h3 className="card-title">Skills</h3>
            <hr />
            <div>
              <button
                className="btn btn-info"
                onClick={this.renderNewForm.bind(this)}
              >
                add Skills
              </button>
            </div>
          </div>
        </div>

        <div>{this.state.displaySkill}</div>
        <div>{this.buttonDisplay()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps, { addSkill })(Skills);
