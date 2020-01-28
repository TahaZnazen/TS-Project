import React, { Component } from 'react'
import "./navbar.css"
export default class NavBar extends Component {
    render() {
        return (
            <nav>
                <h1 id="logo">logo</h1>
                <ul>
                    <li>login</li>
                    <li>signUp</li>
                </ul>
            </nav>
        )
    }
}
