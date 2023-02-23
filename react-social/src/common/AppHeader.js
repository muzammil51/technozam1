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
                <span>   
                  <img src={require("../img/logo1.png")} style={{height:"60px"}} alt=""></img>
                </span> 

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
                                             <a class="nav-link scrollto" href="shortqsnew">Short Questions</a>
                                             <a class="nav-link scrollto" href="mcqsqsnew">Multiple Choice Questions</a>
                                             <a class="nav-link scrollto" href="fillblankqsnew">Fill-in-Blanks</a>
                                             <a class="nav-link scrollto" href="truefalseqsnew">True/False</a>
                                             <a class="nav-link scrollto" href="home#features">Matchings</a>
                                             <a class="nav-link scrollto" href="home#features">Notes</a>

                <li class="dropdown"> <a><img style={{ borderRadius: 500 ,width: 40, height: 40 ,marginRight:7}} src={this.props.currentUser.imageUrl}></img>{this.props.currentUser.name}</a>
                <ul style={{float:'right'}}> 
                  <span><img style={{ borderRadius: 500 ,width: 40, height: 40, marginRight:6 }} src={this.props.currentUser.imageUrl}></img><h2 style={{display:'inline'}}>{this.props.currentUser.name}</h2></span>
                  <span><h3 style={{marginLeft:46,fontSize:14}}>{this.props.currentUser.email}</h3></span>
                  {/* <span><h3 style={{marginLeft:46,fontSize:14}}>{this.props.currentUser.provider}</h3></span> */}

                  <li><NavLink to="/profile">Profile</NavLink></li>
                  <li><NavLink to="/home" onClick={this.props.onLogout}>Logout</NavLink></li>
                </ul>
              </li>  
                        
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
                  <li><a href="/truefalseqs">True/False Generator</a></li>
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