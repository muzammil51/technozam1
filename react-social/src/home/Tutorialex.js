import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from "react-scroll-to-top";
import textvideo from '../img/textupload.mp4'
import filevideo from '../img/fileupload.mp4'




import './Home.css';

class Tutorialex extends Component {

  componentDidMount() {
    AOS.init();
  }

  render() {
    return (

      <div>


        <section id="text" class="hero d-flex align-items-center">

          <div class="container">
            <button type="button" class="bi bi-arrow-return-left btn btn-primary" onClick={() => history.back()} style={{ color: 'blue', float: "inherit", color: "white", position: "relative" }}>Back</button>

            <div class="row">

              <div class="col-lg-6 d-flex flex-column justify-content-center">
                <br></br>

                <h1 style={{ fontSize: "30px" }} data-aos="fade-up">For Text:</h1>
                <h3></h3>

                <h4>1. Copy your content/syllabus and paste it in input field. (Words must be more than 150).</h4>
                <h3>2. Enter the subject/title of your content/syllabus.(Title must contain one word).</h3>
                <h3>3. Select the number of question you want to generate of your content/syllabus.</h3>
                <h3>4. Press "Submit" button to get your question.</h3>
                <h3>5. Press "Clear" button to clear all input fields.</h3>
                <br></br>
                <h3>If you leave any input field empty or words limit less than 150, it will show "Invalid Input" error message.</h3>
                <h3>(Incase of error, click the "red close button" to continue.)</h3>
                <h3>(For example look at the video tutorial.)</h3>
                <h2 data-aos="fade-up" data-aos-delay="600">Let our AI handle it. Smarter than Today</h2>

              </div>
              <div class="col-lg-6" data-aos="zoom-out" data-aos-delay="200">
                <video class="img-fluid" controls >
                  <source src={textvideo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

        </section>



        <section id="file" class="hero d-flex align-items-center">

          <div class="container">
            <button type="button" class="bi bi-arrow-return-left btn btn-primary" onClick={() => history.back()} style={{ color: 'blue', float: "inherit", color: "white", position: "relative" }}>Back</button>

            <div class="row">

              <div class="col-lg-6 d-flex flex-column justify-content-center">
                <br></br>

                <h1 style={{ fontSize: "30px" }} data-aos="fade-up">For Upload File:</h1>
                <h3></h3>

                <h4>1. Select your "<b>*.txt file</b>" which contains your content/syllabus (Words must be more than 150).</h4>
                <h3>2. Enter the subject/title of your content/syllabus (Title must contain one word).</h3>
                <h3>3. Select the number of question you want to generate of your content/syllabus.</h3>
                <h3>4. Press "Submit" button to get your question.</h3>
                <h3>5. Press "Clear" button to clear all input fields.</h3>
                <br></br>
                <h3>If you leave any input field empty or words limit in your file less than 150, it will show "Invalid Input" error message.</h3>
                <h3>(Incase of error, click the "red close button" to continue.)</h3>
                <h3>(For example look at the video tutorial.)</h3>
                <h2 data-aos="fade-up" data-aos-delay="600">Let our AI handle it. Smarter than Today</h2>

              </div>
              <div class="col-lg-6" data-aos="zoom-out" data-aos-delay="200">
                <video class="img-fluid" controls >
                  <source src={filevideo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

        </section>



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

        <ScrollToTop smooth color='white' style={{ backgroundColor: "blue" }} />

        {/* <!-- End Contact Section --> */}
      </div>
    )
  }
}

export default Tutorialex;