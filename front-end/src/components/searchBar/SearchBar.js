import React, { Component } from 'react'
import "./searchBar.css"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {  faSearch } from '@fortawesome/free-solid-svg-icons'


export default class SearchBar extends Component {
    
    render() {
        return (
            <div id="searchBar">
                <input placeholder="Job Categories" id = "what" type="text" />
                <input  placeholder="Location" id="location"type="text" />
                <button><FontAwesomeIcon icon={faSearch} /></button>
            </div>
        )
    }
}
