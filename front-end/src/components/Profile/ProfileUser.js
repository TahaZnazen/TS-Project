import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserCv } from "../../actions/cvActions";
import Experience from "./Experience";
import Education from "./Education";
import Language from "./Language";
import Skill from "./Skill";
import Info from "./Info";
class ProfileUser extends Component {
  state = {
    id: ""
  };
  componentDidMount() {
    this.props.fetchUserCv();
  }
  renderProfile = () => {
    if (this.props.cvUser[0]) {
      return (
        <div>
          <Info userInfo={this.props.cvUser[0].user_id} />
          <hr />
          <Experience
            userExperience={this.props.cvUser[0].experience}
            userId={this.props.cvUser[0].user_id._id}
          />
          <hr />
          <Education
            userEducation={this.props.cvUser[0].education}
            userId={this.props.cvUser[0].user_id._id}
          />
          <hr />
          <Language
            userLanguages={this.props.cvUser[0].language}
            userId={this.props.cvUser[0].user_id._id}
          />
          <hr />
          <Skill
            userSkill={this.props.cvUser[0].skills}
            userId={this.props.cvUser[0].user_id._id}
          />
        </div>
      );
    }
    return <div>loading ...</div>;
  };
  render() {
    console.log(this.props);
    return <div>{this.renderProfile()}</div>;
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { fetchUserCv })(ProfileUser);
