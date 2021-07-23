import React from "react";
import { Link } from "react-router-dom";
import {logout} from '../actions/index';
import {connect} from "react-redux"
// import Logout from "./Logout"

const Header = (props) =>{
  
    const log_out = () => {
        window.localStorage.clear()
        props.logout()
      }

    return(
        <header className = "navbar">
            <Link to ="/">
            <h2 className="navbar-brand" >Use My Tech Stuff</h2>
            </Link>
          <ul className = "navbar-nav">
              <Link to = "/login">
               <button className="btn" onClick = {log_out }> Log out</button>
               </Link>
          </ul>
        </header>
    )
}

export default connect(null,{logout})(Header);