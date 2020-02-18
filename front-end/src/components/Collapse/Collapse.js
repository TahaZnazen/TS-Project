import React from "react";
import "./collapse.css";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <div className="panel-group">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h6
                style={{ width: "100vw", textAlign: "center" }}
                className="panel-title"
                onClick={function() {
                  this.setState({ open: !this.state.open });
                }.bind(this)}
              >
                <FontAwesomeIcon icon={faSortDown} />
              </h6>
            </div>
            <div
              className={
                this.state.open
                  ? "panel-collapse"
                  : "panel-collapse panel-close"
              }
            >
              <div className="all">
                <div className="coll">
                  <div
                    style={{
                      width: "100vw",
                      height: "80vh",
                      backgroundImage: "url(https://i.imgur.com/o3Umk1J.jpg)",
                      backgroundSize: "100% 100%"
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <h6
              className="panel-title"
              onClick={function() {
                this.setState({ open: !this.state.open });
              }.bind(this)}
              style={
                !this.state.open
                  ? { display: "none" }
                  : { display: "block", width: "100vw", textAlign: "center" }
              }
            >
              <FontAwesomeIcon icon={faSortUp} />
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
export default Collapse;
