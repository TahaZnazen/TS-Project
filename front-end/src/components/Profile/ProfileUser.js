import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchUserCv,
  deleteSkill,
  deleteLanguage,
  deleteEducation,
  deleteExperience
} from "../../actions/cvActions";
import Experience from "./ProfileElment/Experience";
import Education from "./ProfileElment/Education";
import Language from "./ProfileElment/Language";
import Skill from "./ProfileElment/Skill";
import Info from "./ProfileElment/Info";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  TabContent,
  TabPane
} from "reactstrap";
class ProfileUser extends Component {
  state = {};
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
            cvId={this.props.cvUser[0]._id}
            deleteExperience={this.props.deleteExperience}
          />
          <hr />
          <Education
            userEducation={this.props.cvUser[0].education}
            cvId={this.props.cvUser[0]._id}
            deleteEducation={this.props.deleteEducation}
          />
          <hr />
          <Language
            userLanguages={this.props.cvUser[0].language}
            cvId={this.props.cvUser[0]._id}
            deleteLanguage={this.props.deleteLanguage}
          />
          <hr />
          <Skill
            userSkill={this.props.cvUser[0].skills}
            cvId={this.props.cvUser[0]._id}
            deleteSkill={this.props.deleteSkill}
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

export default connect(mapStateToProps, {
  fetchUserCv,
  deleteSkill,
  deleteLanguage,
  deleteEducation,
  deleteExperience
})(ProfileUser);
