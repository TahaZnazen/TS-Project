import React, { Component } from "react";
import { CardBody } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { companyDashboard } from "../../../actions/offersAction";
import { connect } from "react-redux";

class DataTable extends Component {
  constructor(props) {
    super(props);

    this.table = [];
    this.options = {
      sortIndicator: true,
      hideSizePerPage: true,
      paginationSize: 4,
      hidePageListOnlyOnePage: true,
      clearSearch: true,
      alwaysShowAllBtns: false,
      withFirstAndLast: false
    };
  }
  componentDidMount() {
    this.props.companyDashboard();
  }
  render() {
    let information =
      this.props.companyDashBoard &&
      this.props.companyDashBoard.map(
        elm => elm.OffersPostedByTheCompany[0].candidates
      );
    console.log(information);
    return (
      <CardBody style={{ height: "50vh", position: "absolute", bottom: "0" }}>
        <BootstrapTable
          data={information[0]}
          version="4"
          striped
          hover
          pagination
          search
          options={this.options}
        >
          <TableHeaderColumn
            dataField="name"
            dataSort
            dataFormat={this.nameFormat}
          >
            Name
          </TableHeaderColumn>
          <TableHeaderColumn isKey dataField="email">
            Email
          </TableHeaderColumn>
          <TableHeaderColumn dataField="gender" dataSort>
            Gender
          </TableHeaderColumn>
          <TableHeaderColumn dataField="location" dataSort>
            Location
          </TableHeaderColumn>
          <TableHeaderColumn dataField="location" dataSort>
            Location
          </TableHeaderColumn>
        </BootstrapTable>
      </CardBody>
    );
  }
}
const mapStateToProps = state => ({
  companyDashBoard: state.posts.companyDashBoard
});
export default connect(mapStateToProps, { companyDashboard })(DataTable);
