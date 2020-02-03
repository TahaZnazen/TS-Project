import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";
import "./dashBoardTable.css";
import PieChart from "./pieChart/PieChart";
import DataTable from "./dataTable/dataTable";
// import data from "./_data";
import Widget01 from "../../views/Widgets/Widget01";
import { CardGroup, Col, Row } from "reactstrap";

class DashBoard extends Component {
  state = {
    sideNav: false
  };
  hideNav() {
    this.setState({ sideNav: !this.state.sideNav });
  }
  // just an example

  render() {
    return (
      <div>
        <div className="d-flex">
          <div className={this.state.sideNav ? "sideNav" : "noSideNav"}>
            <button onClick={this.hideNav.bind(this)} className="sideBtn">
              x
            </button>
          </div>
          {/*  */}
          <div className="dashBoard">
            <div style={{ display: "flex" }}>
              <div>
                <PieChart />
              </div>

              <Row className="mt-5" style={{ width: "60vw" }}>
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

export default DashBoard;
