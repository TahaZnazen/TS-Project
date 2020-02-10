import "./jobOfferNav.css";
import { logout } from "../../../actions/authActions";
import { connect } from "react-redux";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class JobOfferNav extends Component {
  constructor(props) {
    super(props);
  }
  onLogout() {
    this.props.logout(this.props);
  }
  render() {
    return (
      <nav>
        <h1 onClick={this.onLogout.bind(this)}>logout</h1>
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  authInfo: state.auth
});
export default withRouter(connect(mapStateToProps, { logout })(JobOfferNav));
