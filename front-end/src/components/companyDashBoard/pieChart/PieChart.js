import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import { Card, CardHeader, CardBody } from "reactstrap";

const pie = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [20, 50, 30],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};
export default class PieChart extends Component {
  render() {
    return (
      <CardBody style={{ width: "40vw" }}>
        <Pie data={pie} />
      </CardBody>
    );
  }
}
