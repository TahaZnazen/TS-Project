import React, { Component } from "react";
import NavBar from "../../navbar/NavBar";
import { findCompany } from "../../../actions/offersAction";
import { connect } from "react-redux";
class CompanyPublic extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    id && this.props.findCompany(id);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authInfo: state.auth,
  companyInfo: state.posts.companyInfo
});
export default connect(mapStateToProps, { findCompany })(CompanyPublic);
