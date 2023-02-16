import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Home from '../home/Home';
import './AppHeader.css';

class AppHeader extends Component {
    render() {
        return (
            <header id= 'header' className="app-header bg-light fixed-top">
            
            <nav className="navbar">

            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                <div class="row align-items-center">   
                <a href="/home#hero"> 
                <div class="col">   
         
                  <img src={require("../img/logo1.png")} style={{height:"70px"}} alt=""></img>
                    </div>         
            <div>    
            <h3 class='h2'>Q-TECH</h3>
              </div>
              </a>
      </div>



        {/* <ul class="list-group list-group-horizontal">
          <a class="nav-link scrollto" href="home#hero">Home</a>
          <a class="nav-link scrollto" href="home#about">About</a>
          <a class="nav-link scrollto" href="home#values">Values</a>
          <a class="nav-link scrollto" href="home#features">Feature</a>
          <a class="nav-link scrollto" href="home#services">Services</a>
          <a class="nav-link scrollto" href="home#team">Team</a>
          <a class="nav-link scrollto" href="home#contact">Contact</a>

          <i class="bi bi-list mobile-nav-toggle"></i>
        </ul> */}

        <div className="app-options">
                        <nav className="app-nav">
                                { this.props.authenticated ? (
                                    <ul>
                                             <a class="nav-link scrollto" href="home#hero">Home</a>
                                             <a class="nav-link scrollto" href="home#about">About</a>
                                             <a class="nav-link scrollto" href="home#values">Values</a>
                                             <a class="nav-link scrollto" href="home#features">Feature</a>
                                             <li class="dropdown"><a href="home#services"><span>Services</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="/shortqsnew">Short Question Generator</a></li>
                  <li><a href="mcqsqsnew">MCQs Generator</a></li>
                  <li><a href="/fillblankqsnew">Fill-in-Blanks Generator</a></li>
                  <li><a href="#">True/False Generator</a></li>
                  <li><a href="#">Matchings Generator</a></li>
                  <li><a href="#">Notes Generator</a></li>

                </ul>
              </li>                                             <a class="nav-link scrollto" href="home#team">Team</a>
                                             <a class="nav-link scrollto" href="home#contact">Contact</a>
                                            
                                            <NavLink to="/profile" class='getstarted'>Profile</NavLink>
                                        
                                            <NavLink to="/home" onClick={this.props.onLogout} class="getstarted" style={{color:"white"}}>Logout</NavLink>
                                    </ul>
                                ):(
                                    // change the links when user login
                                    <ul>
                                             <a class="nav-link scrollto" href="home#hero">Home</a>
                                             <a class="nav-link scrollto" href="home#about">About</a>
                                             <a class="nav-link scrollto" href="home#values">Values</a>
                                             <a class="nav-link scrollto" href="home#features">Feature</a>
                                             <li class="dropdown"><a href="home#services"><span>Services</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="/shortqs">Short Question Generator</a></li>
                  <li><a href="mcqsqs">MCQs Generator</a></li>
                  <li><a href="/fillblankqs">Fill-in-Blanks Generator</a></li>
                  <li><a href="#">True/False Generator</a></li>
                  <li><a href="#">Matchings Generator</a></li>
                  <li><a href="#">Notes Generator</a></li>

                </ul>
              </li>

                                             <a class="nav-link scrollto" href="home#team">Team</a>
                                             <a class="nav-link scrollto" href="home#contact">Contact</a>
                                        <li>
                                            <NavLink to="/login" class='getstarted'>Get Started</NavLink>   
                                            <i class="bi bi-list mobile-nav-toggle"></i>
    
                                        </li>
                                        {/* <li>
                                            <NavLink to="/signup">Signup</NavLink>        
                                        </li> */}
                                    </ul>
                                )}
                        </nav>
                    </div>
              </div>
            </nav>

        </header>
     
        )
    }
}

export default AppHeader;