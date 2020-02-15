import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";
import "./dashBoardTable.css";
import PieChart from "./pieChart/PieChart";
import DataTable from "./dataTable/dataTable";
// import data from "./_data";
import Widget01 from "../../views/Widgets/Widget01";
import { CardGroup, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStream, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from "../../actions/authActions";
import Setting from "./setting";
class DashBoard extends Component {
  state = {
    sideNav: false,
    setting: false
  };
  hideNav() {
    this.setState({ sideNav: !this.state.sideNav });
  }
  togglesetting() {
    this.setState({ setting: !this.state.setting });
  }
  // just an example
  onLogout() {
    this.props.logout(this.props);
  }
  // Setting
  render() {
    return (
      <div>
        <div className="d-flex">
          <div
            id="sideNav"
            className={this.state.sideNav ? "sideNav" : "noSideNav"}
          >
            <button
              onClick={this.hideNav.bind(this)}
              className={this.state.sideNav ? "sideBtn" : "sideBtnOver"}
              style={{ outline: "none" }}
            >
              <FontAwesomeIcon icon={faStream} />
            </button>

            <h1
              id="navTitle"
              className={this.state.sideNav ? "showed" : "hidden"}
            >
              Dash Board
            </h1>
            <div id="sideMenu">
              <Link to="/company">
                <h1 className={this.state.sideNav ? "showed" : "hidden"}>
                  Profile
                </h1>
              </Link>

              <Link to="/company/jobsDashBoard">
                <h1 className={this.state.sideNav ? "showed" : "hidden"}>
                  Jobs
                </h1>
              </Link>
              <Link>
                <h1
                  onClick={this.togglesetting.bind(this)}
                  className={this.state.sideNav ? "showed" : "hidden"}
                >
                  Setting
                </h1>
              </Link>
            </div>
            <h1
              onClick={this.onLogout.bind(this)}
              style={{
                position: "absolute",
                bottom: "2vh",
                left: "10vw",
                cursor: "pointer"
              }}
              className={this.state.sideNav ? "showed" : "hidden"}
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
            </h1>
          </div>
          {/*  */}
          <div className="dashBoard">
            {this.state.setting && (
              <Setting toggle={this.togglesetting.bind(this)} />
            )}
            <div style={{ display: "flex" }}>
              <div>
                <PieChart />
              </div>

              <Row className="mt-5" style={{ width: "60vw", padding: "10px" }}>
                <Col xs="4" sm="4" lg="4">
                  <Widget01 color="primary" variant="inverse" header="89.9%" />
                </Col>
                <Col xs="12" sm="6" lg="4">
                  <Widget01 color="warning" variant="inverse" header="12.124" />
                </Col>
                <Col xs="12" sm="6" lg="4">
                  <Widget01
                    color="danger"
                    variant="inverse"
                    header="$98.111,00"
                    smallText=""
                  >
                    <small className="text-muted">
                      Excepteur sint occaecat...
                    </small>
                  </Widget01>
                </Col>
                <Col xs="12" sm="6" lg="4">
                  <Widget01
                    color="danger"
                    variant="inverse"
                    header="$98.111,00"
                    smallText=""
                  >
                    <small className="text-muted">
                      Excepteur sint occaecat...
                    </small>
                  </Widget01>
                </Col>{" "}
                <Col xs="12" sm="6" lg="4">
                  <Widget01
                    color="danger"
                    variant="inverse"
                    header="$98.111,00"
                    smallText=""
                  >
                    <small className="text-muted">
                      Excepteur sint occaecat...
                    </small>
                  </Widget01>
                </Col>
                <Col xs="12" sm="6" lg="4">
                  <Widget01
                    color="info"
                    variant="inverse"
                    value="95"
                    header="1.9 TB"
                    mainText="Danger!"
                    smallText="This is your final warning..."
                  />
                </Col>
              </Row>
            </div>

            <DataTable />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authInfo: state.auth
});
export default withRouter(connect(mapStateToProps, { logout })(DashBoard));
