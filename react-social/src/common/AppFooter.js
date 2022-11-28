import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Home from '../home/Home';
import './AppHeader.css';

class AppFooter extends Component {
    render() {
        return (
            <footer id="footer" style={{backgroundColor:"#012970"}}>
            <div class="footer-top">
      <div class="container">
        <div class="row gy-3">
          <div class="col-lg-5 col-md-12">
            <div class = "col-lg-q2 col-10">
              
            <img src={require("../img/logo1.png")} style={{height:"80px"}} alt=""></img>
              <a class="nav-link scrollto" href="home#"><h2 class="h2 text-light">TECHNOZAM</h2></a>
            </div>

           
            <h3>We are team called <b><i>"Prime Art"</i></b> making impossible possible by using AI. Systems that think and make teaching interesting and less time taking. Smart technology for a better future. </h3>
          </div>

          <div class="col-lg-2 col-6 footer-links ">
            <h4 class="text-light">Useful Links</h4>
            <ul class="text-light">
            <li><i class="bi bi-chevron-right"></i> <a href="home#hero" >Home</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="home#about">About</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="home#values">Values</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="home#features">Features</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="home#services">Services</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="home#team">Team</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="home#contact">Contact</a></li>


            </ul>
          </div>

          <div class="col-lg-2 col-5 footer-links">
            <h4 class="text-light">Our Services</h4>
            <ul class="text-light">
              <li><i class="bi bi-chevron-right"></i> <a href="#" >Short Question Generator</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">MCQs Generator</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Fill-in-Blanks Generator</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">True/False Generator</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Matchings Generator</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Notes Generator</a></li>

            </ul>
          </div>

          <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4 class="text-light">Contact Us</h4>
            <p >
            <p>
            Beaconhouse National University<br></br>
              
            13 Km Off Thokar Niazbaig,<br></br>
            Raiwand Rd,Beacon House Society, Lahore, Punjab<br></br>
              <p>
              <br></br>
              <strong>Tel:</strong> 0900 78601<br></br>
              <strong>Phone:</strong> +92 12345678
            </p><p></p>
<p>
              <strong>Email:</strong> info@example.com<br></br>contact@example.com
   </p>           
            </p>
            </p>

          </div>

        </div>
      </div>
    </div>            </footer>
        )
    }
}

export default AppFooter;