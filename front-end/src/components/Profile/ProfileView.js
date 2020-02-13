import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserProfile } from "../../actions/cvActions";
import Info from "./ProfileView/info";
import Educations from "./ProfileView/Educations";
import Experiences from "./ProfileView/Experiences";
import Languages from "./ProfileView/Languages";
import Skills from "./ProfileView/Skills";
import "./profileView.css";
class ProfileView extends Component {
  state = {};

  componentDidMount() {
    let userId = this.props.match.params;
    this.props.fetchUserProfile(userId);
  }

  renderInfo = () => {
    if (this.props.cvUser[0]) {
      const { education, skills, language, experience } = this.props.cvUser[0];
      return (
        <div>
          <div style={{ width: "99vw", height: "100vh" }}>
            <Info data={this.props.cvUser[0].user_id} />
          </div>
          <hr />
          <div className="fullCv">
            <div className="infoContainer">
              <div className="cvTitle"> User education</div>
              <Educations data={education} />
            </div>
            <hr />
            <div className="infoContainer">
              <div className="cvTitle"> User Experiences</div>
              <Experiences data={experience} />
            </div>
            <hr />
            <div className="infoContainer">
              <div className="cvTitle"> User Langauge</div>
              <Languages data={language} />
            </div>
            <hr />
            <div className="infoContainer">
              <div className="cvTitle"> User Skills</div>
              <Skills data={skills} />
            </div>
          </div>
        </div>
      );
    }
  };
  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <div>
        <div>{this.renderInfo()}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { fetchUserProfile })(ProfileView);
