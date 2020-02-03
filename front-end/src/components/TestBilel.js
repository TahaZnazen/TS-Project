import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserCv, createCV } from "../actions/cvActions";
import ExperienceForm from "../components/CV/formsCV/ExperienceForm";
import EducationForm from "../components/CV/formsCV/EducationForm";
import LanguageForm from "../components/CV/formsCV/LanguageForm";
import SkillsForm from "../components/CV/formsCV/SkillsForm";
import TestForm from "../components/formTest";

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

class TestBilel extends Component {
  state = {
    activeTab: 0
  };
  componentDidMount() {
    this.props.fetchUserCv();
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="app">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <strong>List Group</strong> <small>with TabPanes</small>
                <div className="card-header-actions">
                  <Badge>Welecome to your Profile</Badge>
                </div>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="4">
                    <ListGroup id="list-tab" role="tablist">
                      <ListGroupItem
                        onClick={() => this.toggle(0)}
                        action
                        active={this.state.activeTab === 0}
                      >
                        Personal Information
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggle(1)}
                        action
                        active={this.state.activeTab === 1}
                      >
                        Experiences
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggle(2)}
                        action
                        active={this.state.activeTab === 2}
                      >
                        Education
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggle(3)}
                        action
                        active={this.state.activeTab === 3}
                      >
                        Skills
                      </ListGroupItem>
                      <ListGroupItem
                        onClick={() => this.toggle(4)}
                        action
                        active={this.state.activeTab === 4}
                      >
                        Languages
                      </ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col xs="8">
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId={0}>info form</TabPane>
                      <TabPane tabId={1}>
                        <ExperienceForm />
                      </TabPane>
                      <TabPane tabId={2}>
                        <EducationForm />
                      </TabPane>
                      <TabPane tabId={3}>
                        <SkillsForm />
                      </TabPane>
                      <TabPane tabId={4}>
                        <LanguageForm />
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
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
})(TestBilel);
