import React, { Component } from "react";
import NavBar from "../navbar/NavBar";
import "./firstPage.css";
import SearchBar from "../searchBar/SearchBar";
import {
  faPaperPlane,
  faSearch,
  faCommentDollar,
  faFunnelDollar,
  faPrint
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Collapse from "../Collapse/Collapse";

export default class FirstPage extends Component {
  render() {
    return (
      <div>
        <section>
          <NavBar />
          <div id="container">
            <h1>The Easiet Way To Get Your New Job</h1>
            <h2>Find Jobs, Employment & Career Opportunities</h2>
            <SearchBar />
          </div>
        </section>
        <div id="purpose" className="pt-2">
          <h1>How Our Website Works for You</h1>
          <div id="purposeWork">
            <div>
              <h4>
                <FontAwesomeIcon icon={faSearch} />
              </h4>
              <h3>Find the Right Job</h3>
            </div>
            <div>
              <h4>
                <FontAwesomeIcon icon={faCommentDollar} />
              </h4>
              <h3>Research Companies</h3>
            </div>
            <div>
              <h4>
                <FontAwesomeIcon icon={faFunnelDollar} />
              </h4>
              <h3>Compare Salaries</h3>
            </div>
            <div>
              <h4>
                <FontAwesomeIcon icon={faPrint} />
              </h4>
              <h3>Apply To Jobs</h3>
            </div>
          </div>
        </div>

        <div id="information" className="mt-5">
          <h1>Explore Our WebSite</h1>
          <h5>
            Millions of people are searching for jobs, salary information,
            company reviews, and interview questions. See what others are
            looking for on Our Website today.
          </h5>
          <Collapse />
          <div className="userInfo">
            <div>
              <div className="userDeepInfo">
                <h2>
                  I AM <br /> RECRUITER!
                </h2>
                <p>
                  One of our One of our jobs has some kind of flexibility jobs
                  has some kind of flexibility option such as telecommuting, a
                  part-time schedule or a flexible or flextime .
                </p>
                <button>Post New Job</button>
              </div>
            </div>
            <div id="secondDiv" style={{ justifyContent: "flex-start" }}>
              <div className="userDeepInfo" style={{ alignItems: "flex-end" }}>
                <h2 style={{ textAlign: "right" }}>
                  I AM <br />
                  JOBSEEKER!
                </h2>
                <p>
                  One of our One of our jobs has some kind of flexibility jobs
                  has some kind of flexibility option such as telecommuting, a
                  part-time schedule or a flexible or flextime .
                </p>
                <button>Post New Job</button>
              </div>
            </div>
          </div>
          {/*               */}
        </div>
      </div>
    );
  }
}
