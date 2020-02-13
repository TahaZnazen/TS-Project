import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserProfile, connectWebRTC } from "../../actions/cvActions";
import Info from "./ProfileView/info";
import Educations from "./ProfileView/Educations";
import Experiences from "./ProfileView/Experiences";
import Languages from "./ProfileView/Languages";
import Skills from "./ProfileView/Skills";
import axios from "axios";

class ProfileView extends Component {
  state = {};

  componentDidMount() {
    let userId = this.props.match.params;
    this.props.fetchUserProfile(userId);
  }

  startWebRtc = () => {
    console.log("web rtc work");
    let userId = this.props.cvUser[0].user_id._id;
    let companyId = "";
    let token = this.props.auth.token;
    axios
      .post("http://localhost:8080/api/users/generateID", { token })
      .then(response => {
        companyId = response.data.id;
        console.log(response.data.id);
        this.props.connectWebRTC(userId, companyId);
      })
      .catch(err => console.log(err));
  };

  renderInfo = () => {
    if (this.props.cvUser[0]) {
      const { education, skills, language, experience } = this.props.cvUser[0];
      return (
        <div>
          <button onClick={this.startWebRtc}>web RTC</button>
          <div>
            <div>user Info </div>
            <Info data={this.props.cvUser[0].user_id} />
          </div>
          <hr />
          <div>
            <div> User education</div>
            <Educations data={education} />
          </div>
          <hr />
          <div>
            <div> User Experiences</div>
            <Experiences data={experience} />
          </div>
          <hr />
          <div>
            <div> User Langauge</div>
            <Languages data={language} />
          </div>
          <hr />
          <div>
            <div> User Skills</div>
            <Skills data={skills} />
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

export default connect(mapStateToProps, { fetchUserProfile, connectWebRTC })(
  ProfileView
);
