import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserProfile } from "../../actions/cvActions";
import Info from "./ProfileView/info";
import Educations from "./ProfileView/Educations";
import Experiences from "./ProfileView/Experiences";
import Languages from "./ProfileView/Languages";
import Skills from "./ProfileView/Skills";

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
        profile view
        <div>{this.renderInfo()}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { fetchUserProfile })(ProfileView);
