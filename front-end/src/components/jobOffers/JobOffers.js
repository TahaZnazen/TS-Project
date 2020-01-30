import React, { Component } from "react";
import JobOfferNav from "./navbar/JobOfferNav";
import "./joboffer.css";
import SearchBar from "../searchBar/SearchBar";
import "react-perfect-scrollbar/dist/css/styles.css";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css

export default class JobOffers extends Component {
  state = {
    currentPage: 1
  };
  changeCurrentPage = numPage => {
    this.setState({ currentPage: numPage });
    //fetch a data
    //or update a query to get data
  };
  render() {
    return (
      <div id="JobOffermain">
        <JobOfferNav />
        <div id="seachNav">
          <SearchBar />
        </div>
        <div id="MainOffer">
          <div id="MainOfferHolder">
            <nav id="jobOfferCompNav">
              <select>
                <option value="">All Job Types</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <select>
                <option value="">Post Any Time</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <select>
                <option value="">Salary</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <select>
                <option value="">Location</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <select>
                <option value="">More</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </nav>

            <div id="miniOffers">
              <div className="miniJobDesc" style={{ width: "30%" }}>
                {/* mini offer component */}

                {[1, 2, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5].map(elm => (
                  <div className="companyCompo">
                    <div className="companyPhoto"></div>
                    <div className="jobMiniDescription">
                      <h4 style={{ fontWeight: "lighter" }}>Compnay Name</h4>
                      <h3 style={{ fontSize: "30px" }}>Job Name</h3>
                      <h5 style={{ fontSize: "19px" }}>Job Type</h5>
                      <p>salary</p>
                    </div>
                  </div>
                ))}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    color: "black"
                  }}
                >
                  <Pagination
                    currentPage={this.state.currentPage}
                    totalPages={100}
                    changeCurrentPage={this.changeCurrentPage}
                    theme="square-fill"
                  />
                </div>

                {/* mini offer component  end here*/}
              </div>

              <div
                className="miniJobDesc "
                style={{
                  width: "70%",
                  padding: "0"
                }}
              >
                <div id="companyCover"></div>
                <div
                  className="bordBtm"
                  style={{ display: "flex", padding: "20px 50px" }}
                >
                  <div className="jobBigDescription">
                    <h4 style={{ fontWeight: "lighter" }}>Compnay Name</h4>
                    <h3 style={{ fontSize: "30px" }}>Job Name</h3>
                    <h5 style={{ fontSize: "19px" }}>Job Type</h5>
                    <p>salary</p>
                  </div>
                  <button id="applyBtn">Apply Now</button>
                </div>
                <div id="jobDis">
                  <p>
                    loremWhat is Lorem Ipsum? Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum. Why do we use it? It is a long
                    established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as opposed to using 'Content
                    here, content here', making it look like readable English.
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose (injected humour
                    and the like). Where does it come from? Contrary to popular
                    belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classical Latin literature from 45 BC, making
                    it over 2000 years old. Richard McClintock, a Latin
                    professor at Hampden-Sydney College in Virginia, looked up
                    one of the more obscure Latin words, consectetur, from a
                    Lorem Ipsum passage, and going through the cites of the word
                    in classical literature, discovered the undoubtable source.
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                    Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                    by Cicero, written in 45 BC. This book is a treatise on the
                    theory of ethics, very popular during the Renaissance. The
                    first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                    comes from a line in section 1.10.32. The standard chunk of
                    Lorem Ipsum used since the 1500s is reproduced below for
                    those interested. Sections 1.10.32 and 1.10.33 from "de
                    Finibus Bonorum et Malorum" by Cicero are also reproduced in
                    their exact original form, accompanied by English versions
                    from the 1914 translation by H. Rackham.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
