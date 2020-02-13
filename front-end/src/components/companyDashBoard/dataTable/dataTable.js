import React, { Component } from "react";
import { companyDashboard } from "../../../actions/offersAction";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobOffers: [],
      userID: ""
    };
  }

  componentDidMount() {
    let token = this.props.authInfo.token;
    axios
      .post("http://localhost:8080/api/users/generateID", { token: token })
      //invoke he function that will get the posts for this company
      .then(res => {
        this.props.companyDashboard(res.data.id);
      })

      .catch(err => console.log(err));
  }
  // let data = this.props.companyDashBoard[0].OffersPostedByTheCompany;
  // let newData = [];
  // data.map(elm => {
  //   newData.push({
  //     name: elm.title,
  //     location: elm.location,
  //     candidates: elm.candidates
  //   });
  // });

  // this.setState({ jobOffers: newData });

  goProfile(e) {
    this.props.history.push(`/user/${e.target.attributes.candidateId.value}`);
  }
  render() {
    return (
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th> Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>order</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {this.props.companyDashBoard[0] &&
            this.props.companyDashBoard[0].map((elm, i) => (
              <tr>
                <th scope="row">{i}</th>
                <td onClick={this.goProfile.bind(this)} candidateId={elm._id}>
                  {elm.name}
                </td>

                <td>{elm.email}</td>
                <td>{elm.phone || "anonymous phone number"}</td>
                <td>{elm.location || "unknown"}</td>
                <td>{elm.offerName}</td>
                <td>
                  <button
                    onClick={this.getId}
                    jobId={elm.offerId}
                    candidateId={elm._id}
                    companyId={elm.companyId}
                  >
                    Accept
                  </button>
                  <button
                    onClick={this.getId}
                    jobId={elm.offerId}
                    candidateId={elm._id}
                    companyId={elm.companyId}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    );
  }
}
const mapStateToProps = state => ({
  companyDashBoard: state.posts.companyDashBoard,
  authInfo: state.auth
});
export default withRouter(
  connect(mapStateToProps, { companyDashboard })(DataTable)
);
