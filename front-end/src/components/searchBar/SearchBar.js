import React, { Component } from "react";
import "./searchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { filterPosts, getPosts } from "../../actions/offersAction";
import { Link } from "react-router-dom";

class SearchBar extends Component {
  state = {
    skills: "",
    location: ""
  };

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div id="searchBar">
        <input
          onChange={this.onChange.bind(this)}
          name="skills"
          placeholder="Job Categories"
          id="what"
          type="text"
        />
        <input
          onChange={this.onChange.bind(this)}
          name="location"
          placeholder="Location"
          id="location"
          type="text"
        />

        <Link to="/Jobs">
          <button
            style={{ width: "4vw" }}
            onClick={() =>
              this.state.skills || this.state.location
                ? this.props.filterPosts(
                    this.state.skills,
                    this.state.location,
                    this.props
                  )
                : this.props.getPosts()
            }
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});
export default connect(mapStateToProps, { filterPosts, getPosts })(SearchBar);
