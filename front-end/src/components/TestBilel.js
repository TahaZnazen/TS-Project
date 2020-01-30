import React, { Component } from "react";
import { connect } from "react-redux";

class Test extends Component {
  state = {};
  renderTestComponent = () => {
    return <div>this is test Component for fetching API</div>;
  };

  render() {
    console.log(this.props);
    return <div>{this.renderTestComponent()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(Test);
