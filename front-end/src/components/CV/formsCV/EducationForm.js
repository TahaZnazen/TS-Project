import React, { Component } from "react";
import { connect } from "react-redux";
import { addEducation } from "../../../actions/cvActions";
import { Link, BrowserRouter as Router, Redirect } from "react-router-dom";

class EducationForm extends Component {
  state = {
    displayEducation: [],
    key: 0
  };

  handleSubmit = e => {
    e.preventDefault();
    let newEducation = {};
    newEducation.start = e.target.start.value;
    newEducation.end = e.target.end.value;
    newEducation.degree = e.target.degree.value;
    newEducation.diploma = e.target.diploma.value;
    newEducation.establishment = e.target.establishment.value;

    const id = this.props.cvUser[0]._id;
    this.props.addEducation(id, newEducation);
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
              <label>Diploma</label>
              <select id="diploma">
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
                <option value="Bac +5">Bac +5 </option>
                <option value="bac +10">Bac +10 </option>
              </select>
              <input
                type="text"
                name="degree"
                id="degree"
                className="form-control"
                required
              />
            </div>
            <div className="col-lg-4 text-left">
              <label>establishment</label>
              <input
                type="text"
                name="establishment"
                id="establishment"
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
    const educationForms = this.state.displayEducation;
    educationForms.push(this.renderForm());
    let newKey = this.state.key + 1;
    this.setState({
      displayEducation: educationForms,
      key: newKey
    });
  }
  buttonDisplay() {
    if (this.state.displayEducation.length > 0) {
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
            <h3 className="card-title">Education</h3>
            <hr />
            <div>
              <button
                className="btn btn-info"
                onClick={this.renderNewForm.bind(this)}
              >
                add language
              </button>
            </div>
          </div>
        </div>

        <div>{this.state.displayEducation}</div>
        <div>{this.buttonDisplay()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps, { addEducation })(EducationForm);
