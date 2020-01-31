import React, { Component } from "react";
import "./searchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { filterPosts } from "../../actions/offersAction";

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
        <button
          onClick={() =>
            this.state.skills && this.state.location
              ? this.props.filterPosts(this.state.skills, this.state.location)
              : null
          }
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});
export default connect(mapStateToProps, { filterPosts })(SearchBar);
