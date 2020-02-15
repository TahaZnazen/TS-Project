import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchUserCv,
  deleteSkill,
  deleteLanguage,
  deleteEducation,
  deleteExperience,
  updateExperience,
  updateEducation,
  updateLanguage,
  updateSkill,
  addInfo,
  getAppliedJobs
} from "../../actions/cvActions";
import Experience from "./ProfileElment/Experience";
import Education from "./ProfileElment/Education";
import Language from "./ProfileElment/Language";
import Skill from "./ProfileElment/Skill";
import Info from "./ProfileElment/Info";
import UserNav from "../navbar/UserNav";
import "./profileView.css";

class ProfileUser extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchUserCv();
  }
  renderProfile = () => {
    if (this.props.cvUser[0]) {
      return (
        <div style={{ width: "99vw", height: "100vh" }}>
          <UserNav />

          <div style={{ width: "99vw", height: "100vh" }}>
            <Info
              userInfo={this.props.cvUser[0].user_id}
              addInfo={this.props.addInfo}
              jobs={this.props.getAppliedJobs}
            />
          </div>
          <hr />
          {/*  */}
          <div className="fullCv">
            <div className="infoContainer">
              <div className="cvTitle"> User education</div>
              <Education
                userEducation={this.props.cvUser[0].education}
                cvId={this.props.cvUser[0]._id}
                deleteEducation={this.props.deleteEducation}
                updateEducation={this.props.updateEducation}
              />
            </div>
            <hr />
            <div className="infoContainer">
              <div className="cvTitle"> User Experiences</div>
              <Experience
                userExperience={this.props.cvUser[0].experience}
                cvId={this.props.cvUser[0]._id}
                deleteExperience={this.props.deleteExperience}
                updateExperience={this.props.updateExperience}
              />
            </div>
            <hr />
            <div className="infoContainer">
              <div className="cvTitle"> User Langauge</div>
              <Language
                userLanguages={this.props.cvUser[0].language}
                cvId={this.props.cvUser[0]._id}
                deleteLanguage={this.props.deleteLanguage}
                updateLanguage={this.props.updateLanguage}
              />
            </div>
            <hr />
            <div className="infoContainer">
              <div className="cvTitle"> User Skills</div>
              <Skill
                userSkill={this.props.cvUser[0].skills}
                cvId={this.props.cvUser[0]._id}
                deleteSkill={this.props.deleteSkill}
                updateSkill={this.props.updateSkill}
              />
            </div>
          </div>
        </div>
      );
    }
    return <div>loading ...</div>;
  };
  render() {
    console.log("user profile props", this.props);
    return <div>{this.renderProfile()}</div>;
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {
  fetchUserCv,
  deleteSkill,
  deleteLanguage,
  deleteEducation,
  deleteExperience,
  updateExperience,
  updateEducation,
  updateSkill,
  updateLanguage,
  addInfo,
  getAppliedJobs
})(ProfileUser);
