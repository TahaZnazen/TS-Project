import React, { Component } from "react";
import { connect } from "react-redux";
import ExperienceForm from "./formsCV/ExperienceForm";
import SkillsForm from "./formsCV/SkillsForm";
import LanguagesForm from "./formsCV/LanguageForm";
import EducationForm from "./formsCV/EducationForm";

import { fetchUserCv, createCV } from "../../actions/cvActions";
class Cv extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchUserCv();
  }
  displayExperiences = [];
  renderExperienceForm = () => {
    return <ExperienceForm />;
  };
  render() {
    console.log(this.props.cvUser[0]);
    return (
      <div>
        <div>
          <h3>
            Experience
            {this.props.cvUser[0]
              ? this.props.cvUser[0].experience.length
              : null}
          </h3>
          <button onClick={this.renderExperienceForm}>Add</button>
          <div>
            <ExperienceForm />
          </div>
        </div>
        <div>
          <h3>Education</h3>
          <div>
            <EducationForm />
          </div>
        </div>
        <div>
          <h3>skills</h3>
          <div>
            <SkillsForm />
          </div>
        </div>
        <div>
          <h3>Languages</h3>
          <div>
            <LanguagesForm />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {
  fetchUserCv,
  createCV
})(Cv);
