import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardHeader, CardBody } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";
import data from "./_data";

class DataTable extends Component {
  constructor(props) {
    super(props);

    this.table = data.rows;
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

  // just an example
  nameFormat(cell, row) {
    const id = `/users/${row.id}`;
    return (
      <NavLink strict to={id}>
        {" "}
        {cell}{" "}
      </NavLink>
    );
  }

  render() {
    return (
      <div className="animated">
        <CardBody>
          <BootstrapTable
            data={this.table}
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
            <TableHeaderColumn dataField="age" dataSort>
              Age
            </TableHeaderColumn>
            <TableHeaderColumn dataField="city" dataSort>
              City
            </TableHeaderColumn>
          </BootstrapTable>
        </CardBody>
      </div>
    );
  }
}

export default DataTable;
