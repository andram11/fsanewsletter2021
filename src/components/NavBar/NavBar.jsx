import React, { Component } from 'react';
import logo_transparent from '..//./../images/logo_FSA_blanc.png'
import './NavBar.css'


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
           <nav className="navbar  navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand " ></a>
    <a href="/"> <img src={logo_transparent} alt="" width="100" height="60" className="d-inline-block align-text-top"  ></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">
      <img src="https://img.icons8.com/android/24/000000/menu.png"/>
      </span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <a className="nav-link" aria-current="page" href="/">Home&emsp;&emsp;</a>
        <a className="nav-link" href="/resources">&emsp;Resources&emsp;&emsp;</a>
        <a className="nav-link" href="/ideabox">&emsp;Idea Box&emsp;&emsp;</a>
       {/*  <a className="nav-link" href="/agenda">Agenda</a>
        <a className="nav-link" href="/contact">Contact</a> */}
        
      </div>
    </div>
  </div>
</nav>
        );
    }
}
 
export default NavBar;