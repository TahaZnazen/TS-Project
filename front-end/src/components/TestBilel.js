import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserCv, deleteCV } from "../actions";

class Test extends Component {
  state = {};
  test = () => {
    console.log("fetch api ");
    this.props.deleteCV();
    return this.props;
  };
  componentDidMount() {
    this.props.fetchUserCv();
  }
  renderTestComponent = () => {
    console.log("component props", this.props);
    return (
      <div>
        this is test Component for fetching API
        <button onClick={this.test}>test action</button>
      </div>
    );
  };

  render() {
    console.log(this.props);

    return <div>{this.renderTestComponent()}</div>;
  }
}

const mapStateToProps = state => {
  console.log("this state", state);

  return state;
};
/* const mapDispatchToProps = dispatch => {
  return {
    hello: fetchUserCv()
  };
}; */

export default connect(mapStateToProps, { fetchUserCv, deleteCV })(Test);
