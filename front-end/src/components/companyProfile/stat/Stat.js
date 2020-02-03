import React, { Component } from "react";

export default class Stat extends Component {
  render() {
    return (
      <div>
        <div className="row w-100 d-flex justify-content-center">
          <div className="col-sm-2">
            <div className="callout callout-danger">
              <small className="text-muted">Recuring Clients</small>
              <br />
              <strong className="h4">22,643</strong>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="callout callout-warning">
              <small className="text-muted">Pageviews</small>
              <br />
              <strong className="h4">78,623</strong>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="callout callout-success">
              <small className="text-muted">Organic</small>
              <br />
              <strong className="h4">49,123</strong>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="callout">
              <small className="text-muted">CTR</small>
              <br />
              <strong className="h4">23%</strong>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="callout callout-primary">
              <small className="text-muted">Bounce Rate</small>
              <br />
              <strong className="h4">5%</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
