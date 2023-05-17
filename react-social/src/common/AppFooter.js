import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Home from '../home/Home';
import './AppHeader.css';
import background from "../img/footer-bg.png";

class AppFooter extends Component {
  render() {
    return (
      // <footer id="footer" style={{ backgroundColor: "#012970" ,backgroundImage: `url(${background})`, opacity:'10px'}}>
      <footer id="footer" style={{ backgroundColor: "#012970"}}>

        <div class="footer-top">
          {/* <div style={{marginLeft:"30px"}}> */}
          <div class='container'>

            <div class="row gy-3">
              <div class="col-lg-5 col-md-12">
                <div class="col-lg-q2 col-10">

                  <img src={require("../img/logo1.png")} style={{ height: "70px" }} alt=""></img>
                  <a class="nav-link scrollto" href="home#"><h2 class="h2 text-light">Q-TECH</h2></a>
                </div>


                
                <h3 class='text-secondary'>We are team called <b><i>"Prime Art"</i></b> making impossible possible by using AI. Systems that think and make teaching interesting and less time taking. Smart technology for a better future. </h3>
                <div class="social-links">
              <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
              <a href="#" class="facebook" style={{marginLeft:'10px'}}><i class="bi bi-facebook"></i></a>
              <a href="#" class="instagram" style={{marginLeft:'10px'}}><i class="bi bi-instagram"></i></a>
              <a href="#" class="linkedin" style={{marginLeft:'10px'}}><i class="bi bi-linkedin"></i></a>
            </div>
              </div>
              

              <div class="col-lg-2 col-4 footer-links ">
                <h4 class="text-light">Useful Links</h4>
                <ul class="text-light">
                  <li><i class="bi bi-chevron"></i> <a href="home#hero" >Home</a></li>
                  <li><i class="bi bi-chevron"></i> <a href="home#about">About</a></li>
                  <li><i class="bi bi-chevron"></i> <a href="home#values">Values</a></li>
                  <li><i class="bi bi-chevron"></i> <a href="home#features">Features</a></li>
                  <li><i class="bi bi-chevron"></i> <a href="home#services">Services</a></li>
                  <li><i class="bi bi-chevron"></i> <a href="home#team">Team</a></li>
                  <li><i class="bi bi-chevron"></i> <a href="home#contact">Contact</a></li>


                </ul>
              </div>

              <div class="col-lg-2 col-4 footer-links ">
                <h4 class="text-light">Our Services</h4>
                
                {this.props.authenticated ? (
                  <ul class="text-light">
                    <li><i class="bi bi-chevron"></i><a href="shortqsnew">Short Questions</a></li>
                    <li><i class="bi bi-chevron"></i><a href="mcqsqsnew">Multiple Choice Questions</a></li>
                    <li><i class="bi bi-chevron"></i><a href="fillblankqsnew">Fill-in-Blanks</a></li>
                    <li><i class="bi bi-chevron"></i><a href="truefalseqsnew">True/False</a></li>
                    <li><i class="bi bi-chevron"></i><a href="matchingqsnew">Matchings</a></li>
                    <li><i class="bi bi-chevron"></i><a href="notesqsnew">Notes</a></li>
                  </ul>
                ) : (
                  // change the links when user login
                  <ul class="text-light">
                    <li><i class="bi bi-chevron"></i><a href="/shortqs">Short Question</a></li>
                    <li><i class="bi bi-chevron"></i><a href="/mcqsqs">Multiple Choice Questions</a></li>
                    <li><i class="bi bi-chevron"></i><a href="/fillblankqs">Fill-in-Blanks</a></li>
                    <li><i class="bi bi-chevron"></i><a href="/truefalseqs">True/False</a></li>
                    <li><i class="bi bi-chevron"></i><a href="/matchingqs">Matchings</a></li>
                    <li><i class="bi bi-chevron"></i><a href="/notesqs">Notes</a></li>

                  </ul>

                )}
              </div>

              <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4 class="text-light">Contact Us</h4>
                <p class='text-secondary' >
                  <p class='text-secondary'>
                    Beaconhouse National University<br></br>

                    13 Km Off Thokar Niazbaig,<br></br>
                    Raiwand Rd,Beacon House Society, Lahore, Punjab<br></br>
                    <p class='text-secondary'>
                      <br></br>
                      <strong>Tel:</strong> 0900 78601<br></br>
                      <strong>Phone:</strong> +92 12345678
                    </p><p></p>
                    <p class='text-secondary'>
                      <strong>Email:</strong> info@example.com<br></br>contact@example.com
                    </p>
                  </p>
                </p>

              </div>

            </div>
          </div>
        </div>            
        </footer>
    )
  }
}

export default AppFooter;