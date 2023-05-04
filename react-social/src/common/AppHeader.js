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
                  drawerStyle={{backgroundColor:"#C8DACF"}}
                >

                  <a href="/home#hero" class="list-group-item list-group-item-action">
                    <img src={require("../img/logo1.png")} style={{ height: "50px" }} alt=""></img>
                    <h3 class='h2'>Q-TECH</h3>
                    <span >
                    </span>
                  </a>

                  <a>
                    <h3 class='h2'>Services we provide</h3>
                  </a>

                  <div>
                    <a style={{ margin: "5px", }} onMouseOver={{ backgroundColor: "blue" }} href="shortqsnew">
                      <div class="d-flex w-100 justify-content-between">
                        <h3 class="h5 mb-1">Short Question</h3>
                      </div>
                    </a>

                    <a style={{ margin: "5px" }} href="mcqsqsnew" >
                      <div class="d-flex w-100 justify-content-between">
                        <h3 class="h5 mb-1">Multiple Choice Question</h3>
                      </div>
                    </a>


                    <a style={{ margin: "5px" }} href="fillblankqsnew" >
                      <div class="d-flex w-100 justify-content-between">
                        <h3 class="h5 mb-1">Fill-in-Blanks</h3>
                      </div>
                    </a>

                    <a style={{ margin: "5px" }} href="truefalseqsnew" >
                      <div class="d-flex w-100 justify-content-between">
                        <h3 class="h5 mb-1">True/False</h3>
                      </div>
                    </a>

                    <a style={{ margin: "5px" }} href="matchingqsnew" >
                      <div class="d-flex w-100 justify-content-between">
                        <h3 class="h5 mb-1">Matchings</h3>
                      </div>
                    </a>

                    <a style={{ margin: "5px" }} href="notesqsnew" >
                      <div >
                        <h3 class="h5 mb-1">Notes</h3>
                      </div>
                    </a>
                  </div>

                  <div style={{ height: "30px" }} class="d-flex w-100 justify-content-between">
                  </div>


                  <div style={{ padding:"15px", backgroundColor: "#A0BFAC", height: "150px" }}>
                    <img style={{ borderRadius: 500, height: 40, marginRight: 7 }} src={this.props.currentUser.imageUrl}></img>{this.props.currentUser.name}
                    <span><h3 style={{ marginLeft: 40, fontSize: 14 }}>{this.props.currentUser.email}</h3></span>
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/home" onClick={this.props.onLogout}>Logout</NavLink>
                  </div>

                </Drawer>
              </i>
            ) : (
              // change the links when user login (when user is not logged in)
              <i class="bi bi-list mobile-nav-toggle" onClick={this.onToggle} >
                <Drawer
                  show={this.state.show}
                  onClose={this.onClose}
                  drawerStyle={{backgroundColor:"#C8DACF"}}
                >

                     <a href="/home#hero" class="list-group-item list-group-item-action">
                    <img src={require("../img/logo1.png")} style={{ height: "50px" }} alt=""></img>
                    <h3 class='h2'>Q-TECH</h3>
                    <span >
                    </span>
                  </a>

                  <a>
                    <h3 class='h2'>Services we provide</h3>
                  </a>

                  <div>
                    <a style={{ margin: "5px", }} onMouseOver={{ backgroundColor: "blue" }} href="shortqs">
                      <div class="d-flex w-100 justify-content-between">
                        <h3 class="h5 mb-1">Short Question</h3>
                      </div>
                    </a>

                    <a style={{ margin: "5px" }} href="mcqsqs" >
                      <div class="d-flex w-100 justify-content-between">
                        <h3 class="h5 mb-1">Multiple Choice Question</h3>
                      </div>
                    </a>


                    <a style={{ margin: "5px",backgroundColor:"black"}} href="fillblankqs">
                      <div class="d-flex w-100 justify-content-between">
                        <h3 class="h5 mb-1">Fill-in-Blanks</h3>
                      </div>
                    </a>

                    <a style={{ margin: "5px" }} href="truefalseqs" >
                      <div class="li d-flex w-100 justify-content-between">
                        <h3 class="h5 mb-1">True/False</h3>
                      </div>
                    </a>

                    <a style={{ margin: "5px" }} href="matchingqs" >
                      <div class="d-flex w-100 justify-content-between">
                        <h3 class="h5 mb-1">Matchings</h3>
                      </div>
                    </a>

                    <a style={{ margin: "5px" }} href="notesqs" >
                      <div >
                        <h3 class="h5 mb-1">Notes</h3>
                      </div>
                    </a>
                  </div>

                  <div style={{ height: "30px" }} class="d-flex w-100 justify-content-between">
                  </div>
             


                  <div style={{ padding:"15px", backgroundColor: "#A0BFAC", height: "150px" }}>
                  <a>
                    <h3 class='h3'>Login to proceed</h3>
                  </a>
                    <a style={{ height: "45px", width: "170px" }} href='/login' class="getstarted btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
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