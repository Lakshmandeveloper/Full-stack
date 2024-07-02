import React from 'react';
import {Link}  from 'react-router-dom'

function Header(props){
    return(
            <>
            <center>
                <h1>Developer Funnel </h1>
                </center>

            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
            <div className="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">WebSiteName</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">

                <li><Link to ="/">Home</Link></li>
                <li><Link to="/Post">Post</Link></li>
                <li><Link to="/Profile">Profile</Link></li>
            </ul>

            </div>
        </div>
        </nav>
            <hr/>

            </>
    )
}
export default Header