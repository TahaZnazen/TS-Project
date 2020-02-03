import React, { Component } from "react";
import { CardBody } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
let data = [
  {
    id: 1,
    name: "taha",
    email: "tahaznazen@gmail.com",
    regDate: "2016-01-09T14:48:34-08:00",
    city: "tunisia",
    age: 21
  },
  {
    id: 2,
    name: "farouk",
    email: "guizeniFarouk@gmail.com",
    regDate: "2016-01-09T14:48:34-08:00",
    city: "tunisia",
    age: 25
  },
  {
    id: 2,
    name: "farouk",
    email: "guizeniFarouk@gmail.com",
    regDate: "2016-01-09T14:48:34-08:00",
    city: "tunisia",
    age: 25
  },
  {
    id: 2,
    name: "farouk",
    email: "guizeniFarouk@gmail.com",
    regDate: "2016-01-09T14:48:34-08:00",
    city: "tunisia",
    age: 25
  },
  {
    id: 2,
    name: "farouk",
    email: "guizeniFarouk@gmail.com",
    regDate: "2016-01-09T14:48:34-08:00",
    city: "tunisia",
    age: 25
  },
  {
    id: 2,
    name: "farouk",
    email: "guizeniFarouk@gmail.com",
    regDate: "2016-01-09T14:48:34-08:00",
    city: "tunisia",
    age: 25
  },
  {
    id: 2,
    name: "farouk",
    email: "guizeniFarouk@gmail.com",
    regDate: "2016-01-09T14:48:34-08:00",
    city: "tunisia",
    age: 25
  },
  {
    id: 2,
    name: "farouk",
    email: "guizeniFarouk@gmail.com",
    regDate: "2016-01-09T14:48:34-08:00",
    city: "tunisia",
    age: 25
  },
  {
    id: 2,
    name: "farouk",
    email: "guizeniFarouk@gmail.com",
    regDate: "2016-01-09T14:48:34-08:00",
    city: "tunisia",
    age: 25
  },
  {
    id: 2,
    name: "farouk",
    email: "guizeniFarouk@gmail.com",
    regDate: "2016-01-09T14:48:34-08:00",
    city: "tunisia",
    age: 25
  },
  {
    id: 2,
    name: "farouk",
    email: "guizeniFarouk@gmail.com",
    regDate: "2016-01-09T14:48:34-08:00",
    city: "tunisia",
    age: 25
  },
  {
    id: 2,
    name: "farouk",
    email: "guizeniFarouk@gmail.com",
    regDate: "2016-01-09T14:48:34-08:00",
    city: "tunisia",
    age: 25
  },
  {
    id: 2,
    name: "farouk",
    email: "guizeniFarouk@gmail.com",
    regDate: "2016-01-09T14:48:34-08:00",
    city: "tunisia",
    age: 25
  },
  {
    id: 2,
    name: "farouk",
    email: "guizeniFarouk@gmail.com",
    regDate: "2016-01-09T14:48:34-08:00",
    city: "tunisia",
    age: 25
  },
  {
    id: 2,
    name: "farouk",
    email: "guizeniFarouk@gmail.com",
    regDate: "2016-01-09T14:48:34-08:00",
    city: "tunisia",
    age: 25
  }
];
export default class DataTable extends Component {
  constructor(props) {
    super(props);

    this.table = data;
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
  render() {
    return (
      <CardBody style={{ height: "50vh", position: "absolute", bottom: "0" }}>
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
    );
  }
}
