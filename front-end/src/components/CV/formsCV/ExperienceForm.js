import React, { Component } from "react";
import { connect } from "react-redux";
import { addExperience } from "../../../actions/cvActions";
import { Link, BrowserRouter as Router, Redirect } from "react-router-dom";

class ExperienceForm extends Component {
  state = {
    displayExperience: [],
    key: 0
  };

  handleSubmit = e => {
    e.preventDefault();
    let newExperience = {};
    newExperience.start = e.target.start.value;
    newExperience.end = e.target.end.value;
    newExperience.companyName = e.target.companyName.value;
    newExperience.position = e.target.positionName.value;
    newExperience.task = e.target.task.value;

    const id = this.props.cvUser[0]._id;
    this.props.addExperience(id, newExperience);
  };

  renderForm = () => {
    console.log("form rendered");
    return (
      <div
        key={this.state.key}
        className="container col-lg-8 mx-auto text-center"
      >
        <form onSubmit={this.handleSubmit}>
          <div className="row col-lg-10 mx-auto">
            <div className="col-lg-4 text-left">
              <label>company Name</label>
              <input
                type="text"
                name="name"
                id="companyName"
                className="form-control"
                required
              />
            </div>
            <div className="col-lg-4 text-left">
              <label>Position Name</label>
              <input
                type="text"
                name="postion"
                id="positionName"
                className="form-control"
                required
              />
            </div>
            <div className="col-lg-4 text-left">
              <label>start date</label>
              <input
                type="date"
                name="start"
                id="start"
                className="form-control"
                required
              />
            </div>
            <div className="col-lg-4 text-left">
              <label>End date</label>
              <input
                type="date"
                name="end"
                id="end"
                className="form-control"
                required
              />
            </div>
            <div className="col-lg-4 text-left">
              <label>Tasks</label>
              <input
                type="text-area"
                name="task"
                id="task"
                className="form-control"
                required
              />
            </div>
            <br />
            <button type="submit" className="btn btn-info">
              Save
            </button>
          </div>
        </form>
        <hr />
      </div>
    );
  };

  renderNewForm() {
    const experienceForms = this.state.displayExperience;
    experienceForms.push(this.renderForm());
    let newKey = this.state.key + 1;
    this.setState({
      displayExperience: experienceForms,
      key: newKey
    });
  }
  buttonDisplay() {
    if (this.state.displayExperience.length > 0) {
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
                skills
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
            <h3 className="card-title">Personal Informations</h3>
            <hr />
            <div>
              <button
                className="btn btn-info"
                onClick={this.renderNewForm.bind(this)}
              >
                add experience
              </button>
            </div>
          </div>
        </div>

        <div>{this.state.displayExperience}</div>
        <div>{this.buttonDisplay()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps, { addExperience })(ExperienceForm);
