import React, { Component } from 'react';
import { NavLink, Link} from 'react-router-dom'

import './Home.css';

class Matchingqs extends Component {
    render() {
        return (
          
            <div>
              
               <section id="hero" class="hero d-flex align-items-center">

<div class="container">
  <div class="row">
    <div class="col-lg-6 d-flex flex-column justify-content-center">
      <h1 data-aos="fade-up">We Offer Automated Matching Questions Generation Using AI</h1>
      <h3>We are team called <b><i>"Prime Art"</i></b> making impossible possible by using AI. Systems that think and make teaching interesting and less time taking. Smart technology for a better future. </h3>
      <h2 data-aos="fade-up" data-aos-delay="600">Let our AI handle it. Smarter than Today</h2>

      <div data-aos="fade-up" data-aos-delay="600">

       { this.props.authenticated ? ( 
        <ul>
         <NavLink class="getstarted btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
         Get
       </NavLink>
       </ul>
        ) : ( 
          <ul>
        <NavLink to='/login' class="getstarted btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
        Get Started
      </NavLink></ul>
      ) }
   
      </div>
    </div>
    <div class="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
      <img src={require('../img/quesgenerator.png')} class="img-fluid" alt=""></img>
    </div>
  </div>
</div>

</section>



    {/* <!-- ======= About Section ======= --> */}
    <section id="about" class="about">

      <div class="container" data-aos="fade-up">
        <div class="row gx-0">

          <div class="d-flex flex-column justify-content-center" data-aos="fade-up" >
            <div class="content">
              <h3>What we offer</h3>
              <h2>Adopting the latest AI technology and providing the staff, teachers, and students with the best possible environment to work and learn.</h2>
            
              <p>We offer you to generate matching questions based on text using AI technology. You just have to add your content and questions will be generated within seconds. Our goal is to generate efficient and accurate results to save your time & effort.</p>
              <div class="text-center text-lg-start">
                <a href="#" class="btn-read-more d-inline-flex align-items-center">
                  <span>Read More</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
          </div>

        </div>
      </div>

    </section>
    {/* <!-- End About Section --> */}

    {/* <!-- ======= Features Section ======= --> */}
    <section id="features" class="features">

      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h2>Features</h2>
          <p>Matching Question Generator Provides</p>

        </header>

        <div class="row">

          <div class="col-lg-6">
            <img src={require("../img/features-2.png")} class="img-fluid" alt=""></img>
          </div>

          <div class="col-lg-6 mt-5 mt-lg-0 d-flex">
            <div class="row align-self-center gy-4">

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Efficient and Accurate Questions</h3>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Minimum human errors</h3>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Time saving</h3>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Least efforts</h3>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Handle large data easily</h3>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Automated response</h3>
                </div>
              </div>

            </div>
          </div>

        </div>
        </div>
        
         </section> 
         {/* End of feature section */}

    {/* <!-- ======= Contact Section ======= --> */}
    <section id="contact" class="contact">

      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </header>

        <div class="row gy-4">

          <div class="col-lg-6">

            <div class="row gy-4">
              <div class="col-md-6">
                <div class="info-box">
                  <i class="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>Beaconhouse National University</p>
                  <p>13 Km Off Thokar Niazbaig, <br></br>Raiwand Rd,Beacon House Society, Lahore, Punjab</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box">
                  <i class="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>Tel : 0900-78601<br></br> Phone : +92 123456789</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box">
                  <i class="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>info@example.com<br></br>contact@example.com</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box">
                  <i class="bi bi-clock"></i>
                  <h3>Open Hours</h3>
                  <p>Monday - Friday<br></br>9:00AM - 05:00PM</p>
                </div>
              </div>
            </div>

          </div>

          <div class="col-lg-6">
            <form action="./contact.php" method="post" class="php-email-form">
              <div class="row gy-4">

                <div class="col-md-6">
                  <input type="text" name="name" class="form-control" placeholder="Your Name" required></input>
                </div>

                <div class="col-md-6 ">
                  <input type="email" class="form-control" name="email" placeholder="Your Email" required></input>
                </div>

                <div class="col-md-12">
                  <input type="text" class="form-control" name="subject" placeholder="Subject" required></input>
                </div>

                <div class="col-md-12">
                  <textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                </div>

                <div class="col-md-12 text-center">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>

          </div>

        </div>

      </div>

    </section>
    {/* <!-- End Contact Section --> */}
        </div>
        )
    }
}

export default Matchingqs;