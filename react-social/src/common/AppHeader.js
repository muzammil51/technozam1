import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';


class AppHeader extends Component {



  render() {
    return (
      <header id='header' className="app-header fixed-top" style={{background:'white',boxShadow:"0px 2px 20px rgba(1, 5, 12, 0.1)"}}>

        <nav className="navbar">

          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

            <a href="/home#hero"  class="d-flex align-items-center">
              <img src={require("../img/logo1.png")} style={{ height: "50px" }} alt=""></img>
              <span>
                <h3 class='h3'>Q-TECH</h3>
              </span>
            </a>
            

            {this.props.authenticated ? (
              <ul>
                <li><a class="nav-link scrollto" href="shortqsnew">Short Questions</a></li>
                <li><a class="nav-link scrollto" href="mcqsqsnew">Multiple Choice Questions</a></li>
                <li><a class="nav-link scrollto" href="fillblankqsnew">Fill-in-Blanks</a></li>
                <li><a class="nav-link scrollto" href="truefalseqsnew">True/False</a></li>
                <li><a class="nav-link scrollto" href="matchingqsnew">Matchings</a></li>
                <li><a class="nav-link scrollto" href="notesqsnew">Notes</a></li>

                <li class="dropdown"> <a><img style={{ borderRadius: 500, width: 40, height: 40, marginRight: 7 }} src={this.props.currentUser.imageUrl}></img>{this.props.currentUser.name}</a>
                  <ul style={{ float: 'right' }}>
                    <span><img style={{ borderRadius: 500, width: 40, height: 40, marginRight: 6 }} src={this.props.currentUser.imageUrl}></img><h2 style={{ display: 'inline' }}>{this.props.currentUser.name}</h2></span>
                    <span><h3 style={{ marginLeft: 46, fontSize: 14 }}>{this.props.currentUser.email}</h3></span>
                    {/* <span><h3 style={{marginLeft:46,fontSize:14}}>{this.props.currentUser.provider}</h3></span> */}

                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/home" onClick={this.props.onLogout}>Logout</NavLink></li>
                  </ul>
                </li>

              </ul>
            ) : (
              // change the links when user login (when user is not logged in)
              <ul>
                <li><a class="nav-link scrollto" href="home#hero">Home</a></li>
                <li><a class="nav-link scrollto" href="home#about">About</a></li>
                <li><a class="nav-link scrollto" href="home#values">Values</a></li>
                <li><a class="nav-link scrollto" href="home#features">Feature</a></li>
                <li class="dropdown"><a href="home#services"><span>Services</span> <i class="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="/shortqs">Short Question Generator</a></li>
                    <li><a href="/mcqsqs">MCQs Generator</a></li>
                    <li><a href="/fillblankqs">Fill-in-Blanks Generator</a></li>
                    <li><a href="/truefalseqs">True/False Generator</a></li>
                    <li><a href="/matchingqs">Matchings Generator</a></li>
                    <li><a href="/notesqs">Notes Generator</a></li>
                  </ul>
                </li>

                <li><a class="nav-link scrollto" href="home#team">Team</a></li>
                <li><a class="nav-link scrollto" href="home#contact">Contact</a></li>
                <li>
                  <NavLink to="/login" class='getstarted scrollto'>Get Started</NavLink>

                  <i class="bi bi-list mobile-nav-toggle"></i>
                </li>
                <i class="bi bi-list mobile-nav-toggle">
                  
                </i>

                {/* <li><NavLink to="/signup">Signup</NavLink></li> */}
              </ul>
            )}
            <i class="bi bi-list mobile-nav-toggle"></i>

          </div>

        </nav>

      </header>

    )
  }
}

export default AppHeader;