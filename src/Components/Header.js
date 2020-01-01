import React, { Component } from 'react'
import "./Components.css";
import ImportAPI from "./importAPI"
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
export default class Header extends Component {
    render() {
        return (
            <div>
              <div>
                <h1 id="headerId">IMDb Movies
                <button id="signin_id" style={{marginLeft:"70%"}}>Sign-In</button><button >Sign-Up</button></h1>
                </div>
                <ImportAPI/>
            </div>
        )
    }
}
