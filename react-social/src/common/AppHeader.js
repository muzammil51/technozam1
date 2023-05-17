import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';

import { Drawer } from '@atul15r/react-drawer';


class AppHeader extends Component {
  
  constructor() {
    super();
    this.state = {
      show: false,
    }
    this.onToggle = this.onToggle.bind(this)
    this.onClose = this.onClose.bind(this)
  }
  onToggle() {
    this.setState({ show: true });
  }
  onClose() {
    this.setState({ show: false });
  }
  componentDidMount(){
        this.props.handleLogin();

  }

  render() {


    return (
      <header id='header' className="app-header fixed-top" style={{ background: 'white', boxShadow: "0px 2px 20px rgba(1, 5, 12, 0.1)" }}>

        <nav className="navbar">

          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

            <a href="/home#hero" class="d-flex align-items-center">
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
                  
                  <ul style={{float: 'left', width:"100%", paddingLeft:"15px",marginRight:"50px"}}>
                    
                    <span><img style={{ borderRadius: 500, width: 40, height: 40, marginRight: 12 }} src={this.props.currentUser.imageUrl}></img>
                    <h2 style={{  }}>{this.props.currentUser.name}</h2></span>
                    <h3 style={{fontSize: 14}}>{this.props.currentUser.email}</h3>

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
                </li>


              </ul>
            )}

            {/* mobile toggle view */}

            {this.props.authenticated ? (
              // change the links when user login (when user is logged in)
              <i class="bi bi-list mobile-nav-toggle" onClick={this.onToggle} >
                
                <Drawer
                  show={this.state.show}
                  onClose={this.onClose}
                  drawerStyle={{ backgroundColor: "white" }}
                  width={300}
                >

                  <a href="/home#hero" class="list-group-item list-group-item-action">
                    <img src={require("../img/logo1.png")} style={{ height: "50px" }} alt=""></img>
                    <h3 class='h2'>Q-TECH</h3>
                    <span >
                    </span>
                  </a>

                  <a>
                    <b><h3 class='h4' style={{ fontWeight: 'bold', marginTop: '8px',textDecoration:"underline" }}>Services we provide</h3></b>
                  </a>


                  <a style={{ marginLeft: "15px" }} href="shortqsnew">
                    <h3 class="h5">Short Question</h3>
                  </a>

                  <a style={{ marginLeft: "15px" }} href="mcqsqsnew" >
                    <h3 class="h5">Multiple Choice Question</h3>
                  </a>


                  <a style={{ marginLeft: "15px" }} href="fillblankqsnew" >
                    <h3 class="h5">Fill-in-Blanks</h3>
                  </a>

                  <a style={{ marginLeft: "15px" }} href="truefalseqsnew" >
                      <h3 class="h5">True/False</h3>
                  </a>

                  <a style={{ marginLeft: "15px" }} href="matchingqsnew" >
                      <h3 class="h5">Matchings</h3>
                  </a>

                  <a style={{ marginLeft: "15px" }} href="notesqsnew" >
                      <h3 class="h5">Notes</h3>
                  </a>


                  <div style={{ height: "30px" }} class="d-flex w-100 justify-content-between">
                  </div>


                  <div style={{ padding: "15px", backgroundColor: "#012970", height: "150px" }}>
                    <img style={{ borderRadius: 500, height: 40, marginRight: 7,}} src={this.props.currentUser.imageUrl}></img> <span style={{fontSize:22,marginLeft:2,color:"whitesmoke"}}>{this.props.currentUser.name}</span>
                    <span style={{ marginLeft: 55, fontSize: 15, color:"grey"}}> {this.props.currentUser.email}</span>
                    <div style={{height:"20px"}}></div>

                    <NavLink class="btn btn-link" to="/profile" style={{fontSize:"15px",color:"white", backgroundColor:"transparent"}}>Profile</NavLink>
                    <NavLink class="btn btn-link" to="/home" onClick={this.props.onLogout} style={{fontSize:"15px",color:"white", backgroundColor:"transparent"}}>Logout</NavLink>
                  </div>

                </Drawer>
                
              </i>
            ) : (
              // change the links when user login (when user is not logged in)
              <i class="bi bi-list mobile-nav-toggle" onClick={this.onToggle} >
                
                <Drawer
                  show={this.state.show}
                  onClose={this.onClose}
                  drawerStyle={{ backgroundColor: "white" }}
                  width={300}
                >

              
                  <a href="/home#hero" class="list-group-item list-group-item-action">
                    <img src={require("../img/logo1.png")} style={{ height: "50px" }} alt=""></img>
                    <h3 class='h2'>Q-TECH</h3>
                    <span >
                    </span>
                  </a>

                  <a>
                    <b><h3 class='h4' style={{ fontWeight: 'bold', marginTop: '20px' }}>Services we provide</h3></b>
                  </a>


                  <a style={{ marginLeft: "15px" }} href="shortqs">
                    <h3 class="h5">Short Question</h3>
                  </a>

                  <a style={{ marginLeft: "15px" }} href="mcqsqs" >
                    <h3 class="h5">Multiple Choice Question</h3>
                  </a>


                  <a style={{ marginLeft: "15px" }} href="fillblankqs" >
                    <h3 class="h5">Fill-in-Blanks</h3>
                  </a>

                  <a style={{ marginLeft: "15px" }} href="truefalseqs" >
                      <h3 class="h5">True/False</h3>
                  </a>

                  <a style={{ marginLeft: "15px" }} href="matchingqs" >
                      <h3 class="h5">Matchings</h3>
                  </a>

                  <a style={{ marginLeft: "15px" }} href="notesqs" >
                      <h3 class="h5">Notes</h3>
                  </a>


                  <div style={{ height: "30px" }} class="d-flex w-100 justify-content-between">
                  </div>


                  <div style={{ padding: "15px", backgroundColor: "#012970", height: "155px" }}>
                    <a>
                      <h3 class='h3' style={{fontSize:25,color:"whitesmoke"}}>Login to proceed</h3>
                    </a>
                    <a style={{ height: "40px", width: "150px" }} href='/login' class="getstarted btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                      Get Started
                    </a>
                  </div>

                </Drawer>
              </i>
            )}



          </div>

        </nav>

      </header>

    )
  }
}

export default AppHeader;