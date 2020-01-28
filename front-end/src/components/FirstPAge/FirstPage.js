import React, { Component } from 'react'
import NavBar from "../navbar/NavBar"
import "./firstPage.css"
import SearchBar from "../searchBar/SearchBar"
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'



export default class FirstPage extends Component {
    render() {
        return (
            <div>
              <section>
              <NavBar/>
              <div id="container">
                  <h1>The Easiet Way To Get Your New Job</h1>
                  <h2>Find Jobs, Employment & Career Opportunities</h2>
                  <SearchBar/>     
                       
              </div>
              </section>        
            </div>
           
        )
    }
}
