import React, { Component } from 'react';
import { NavLink, Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createContact } from '../util/APIUtils';
import Alert from 'react-s-alert';

import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css';
import ScrollToTop from "react-scroll-to-top";


class Home extends Component {

  constructor(props) {
    super(props);

  this.state = {
    // step 2
    id: this.props.match.params.id,
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  this.changeNameHandler = this.changeNameHandler.bind(this);
  this.changeEmailHandler = this.changeEmailHandler.bind(this);
  this.changeSubjectHandler = this.changeSubjectHandler.bind(this);
  this.changeMessageHandler = this.changeMessageHandler.bind(this);

  this.saveOrUpdateContact = this.saveOrUpdateContact.bind(this);

}

saveOrUpdateContact = (e) => {
  e.preventDefault();
  let contactRequest = { name: this.state.name, email: this.state.email, subject: this.state.subject, message: this.state.message };
  console.log('contact => ' + JSON.stringify(contactRequest));

  // step 5
    createContact(contactRequest).then(res => {
      Alert.success("Your message has been sent. Thank You!");
      this.props.history.push("/home#hero");
    }).catch(error => {
      Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
    });

}

changeNameHandler = (event) => {
  this.setState({ name: event.target.value });
}

changeEmailHandler = (event) => {
  this.setState({ email: event.target.value });
}

changeSubjectHandler = (event) => {
  this.setState({ subject: event.target.value });
}
changeMessageHandler = (event) => { 
  this.setState({ message: event.target.value});
}

  componentDidMount() {
    // this.props.handleLogin();
    AOS.init();
}
    render() {
        return (
          
            <div>

               <section id="hero" class="hero d-flex align-items-center">

<div class="container">
  <div class="row">
    <div class="col-lg-6 d-flex flex-column justify-content-center">
      <h1 data-aos="fade-up">We Offer Modern Education Using AI</h1>
      <h3 data-aos="fade-up" data-aos-delay="400">We are team called <b><i>"Prime Art"</i></b> making impossible possible by using AI. Systems that think and make teaching interesting and less time taking. Smart technology for a better future. </h3>
      <h2 data-aos="fade-up" data-aos-delay="400">Let our AI handle it. Smarter than Today</h2>

      <div data-aos="fade-up" data-aos-delay="600">

       { this.props.authenticated ? ( 
        <ul>
         <NavLink  to="/profile" class="getstarted btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
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
      <img src={require('../img/hero-img.png')} class="img-fluid" alt=""></img>
    </div>
  </div>
</div>

</section>

      
      {/* <!-- ======= About Section ======= --> */}
    <section id="about" class="about">

      <div class="container" data-aos="fade-up">
        <div class="row gx-0">

          <div class="d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div class="content">
              <h3>Who We Are</h3>
              <h2>Adopting the latest AI technology and providing the staff, teachers, and students with the best possible environment to work and learn.</h2>
              <p>
              We allow teachers to select from different types of questions they would prefer to collect like true/false, MCQ’s, questions etc. by uploading their semester content from which automatic questions will be generated which can be used for assignments, quizzes or exams. Teachers will have an option to get lecture notes based on the course content they have uploaded, which will help them in providing lessons.
              </p>
              <p> Our goal in Ed-Tech is to make it easy for teachers as well as instructors and to help them in tasks that they have to perform repeatedly which require a lot of time and effort. Teachers will find an ease in performing their daily tasks, a decrease in their work load and it would save a lot time as well.</p>
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

    
    {/* <!-- ======= Values Section ======= --> */}
    <section id="values" class="values">

      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h2>Our Values</h2>
          <p>What our main goals are?</p>
        </header>

        <div class="row">

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="box">
              <img src={require("../img/values-1.png")} class="img-fluid" alt=""></img>
              <h3>Benefit the teachers by minimizing their workload</h3>
              <p>Making it easy for teachers as well as instructors and to help them in tasks that they have to perform repeatedly which require a lot of time and effort</p>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
            <div class="box">
              <img src={require("../img/values-2.png")} class="img-fluid" alt=""></img>
              <h3>Efficient and Accurate Results</h3>
              <p>Improving the quality of teaching.Reducing human bias and error. Providing educational support within and outside the classroom.</p>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
            <div class="box">
              <img src={require("../img/values-3.png")} class="img-fluid" alt=""></img>
              
              <h3>AI based teaching</h3>
              <p>Using machine learning algorithm that uses NLP (Natural Language Processing). Teachers can interact with it easily for their on-campus curriculum</p>
            </div>
          </div>

        </div>

      </div>

    </section>
    {/* <!-- End Values Section --> */}

    {/* <!-- ======= Features Section ======= --> */}
    <section id="features" class="features">

      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h2>Features</h2>
          <p>Features that we provide</p>

        </header>

        <div class="row">

          <div class="col-lg-6">
            <img src={require("../img/features.png")} class="img-fluid" alt=""></img>
          </div>

          <div class="col-lg-6 mt-5 mt-lg-0 d-flex">
            <div class="row align-self-center gy-4">

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Short Question Generation</h3>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>MCQs Generation</h3>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Fill-in-Blanks Generation</h3>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>True/False Generation</h3>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Matchings Question Generation</h3>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Notes Generation</h3>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* <!-- Feature Icons --> */}
        {/* <div class="row feature-icons" data-aos="fade-up">
          <h3 style={{alignItems:"center"}}>Further Overview</h3>

          <div class="row">

            <div class="col-xl-4 text-center" data-aos="fade-right" data-aos-delay="100">
              <img src={require("../img/features-3.png")} class="img-fluid p-4" alt=""></img>
            </div>

            <div class="col-xl-8 d-flex content">
              <div class="row align-self-center gy-4">

                <div class="col-md-6 icon-box" data-aos="fade-up">
                  <i class="ri-line-chart-line"></i>
                  <div>
                    <h4>Short Question Generation</h4>
                    <p>Details...</p>
                  </div>
                </div>

                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                  <i class="ri-stack-line"></i>
                  <div>
                    <h4>MCQs Generation</h4>
                    <p>Details</p>
                  </div>
                </div>

                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                  <i class="ri-brush-4-line"></i>
                  <div>
                    <h4>Fill-in-Blanks Generation</h4>
                    <p>Details</p>
                  </div>
                </div>

                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                  <i class="ri-magic-line"></i>
                  <div>
                    <h4>True/False</h4>
                    <p>Details</p>
                  </div>
                </div>

                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                  <i class="ri-command-line"></i>
                  <div>
                    <h4>Matchings</h4>
                    <p>Details</p>
                  </div>
                </div>

                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                  <i class="ri-radar-line"></i>
                  <div>
                    <h4>Notes Generation</h4>
                    <p>Details</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div> */}
        {/* <!-- End Feature Icons --> */}
        </div>
         {/* <!-- / row --> */}
         </section> 
         {/* End of feature section */}

         {/* <!-- ======= Services Section ======= --> */}
         
    <section id="services" class="services">

      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h2>Services</h2>
          <p>Services that we provide</p>
        </header>

        <div class="row gy-4">

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="service-box blue">
              <i class="ri-discuss-line icon"></i>
              <h3>Short Question Generator</h3>
              <p>We offer you to generate short questions based on text using AI technology. You just have to add your content and questions will be generated within seconds. Our goal is to generate efficient and accurate results to save your time & effort.</p>

              <a href='/shortqs' class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="service-box orange">
              <i class="ri-discuss-line icon"></i>
              <h3>MCQs Generator</h3>
              <p>We offer you to generate MCQs questions based on text using AI technology. You just have to add your content and MCQs will be generated within seconds. Our goal is to generate efficient and accurate results to save your time & effort.</p>
              <a href="/mcqsqs" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div class="service-box green">
              <i class="ri-discuss-line icon"></i>
              <h3>Fill-in-blank Generator</h3>
              <p>We offer you to generate Fill-in-Blanks questions based on text using AI technology. You just have to add your content and fill-in-blanks questions will be generated within seconds. Our goal is to generate efficient and accurate results to save your time & effort.</p>
              <a href="/fillblankqs" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div class="service-box red">
              <i class="ri-discuss-line icon"></i>
              <h3>True/False Generator</h3>
              <p>We offer you to generate True/False questions based on text using AI technology. You just have to add your content and True/False questions will be generated within seconds. Our goal is to generate efficient and accurate results to save your time & effort.</p>
              <a href="/truefalseqs" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div class="service-box purple">
              <i class="ri-discuss-line icon"></i>
              <h3>Matchings Generator</h3>
              <p>We offer you to generate Matchings questions based on text using AI technology. You just have to add your content and matchings questions will be generated within seconds. Our goal is to generate efficient and accurate results to save your time & effort.</p>
              <a href="/matchingqs" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
            <div class="service-box pink">
              <i class="ri-discuss-line icon"></i>
              <h3>Notes Generator</h3>
              <p>We offer you to generate Notes based on text using AI technology. You just have to add your content and notes will be generated within seconds. Our goal is to generate efficient and accurate results to save your time & effort.</p>
              <a href="/notesqs" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

        </div>

      </div>

    </section>
    {/* <!-- End Services Section --> */}

    {/* <!-- ======= Pricing Section ======= --> */}

    
    {/* <section id="pricing" class="pricing">

      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h2>Pricing</h2>
          <p>Check our Pricing</p>
        </header>

        <div class="row gy-4" data-aos="fade-left">

          <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="box">
              <h3 style={{color: '#07d5c0'}}>Free Plan</h3>
              <div class="price"><sup>$</sup>0<span> / mo</span></div>
              <img src={require("../img/pricing-free.png")} class="img-fluid" alt=""></img>
              <ul>
                <li>Limited Access</li>
                <li>Text Input Uploads</li>
                <li>Save output</li>
                <li class="na">File Input Uploads</li>
                <li class="na">Output file save option</li>
              </ul>
              <a href="#" class="btn-buy">Buy Now</a>
            </div>
          </div>

          <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="box">
              <span class="featured">Featured</span>
              <h3 style={{color: "#65c600"}}>Starter Plan</h3>
              <div class="price"><sup>$</sup>10<span> / mo</span></div>
              <img src={require("../img/pricing-starter.png")} class="img-fluid" alt=""></img>

              <ul>
              <li>Limited Access</li>
                <li>Text Input Uploads</li>
                <li>Save output</li>
                <li>File Input Uploads</li>
                <li>Output file save option</li>
              </ul>
              <a href="#" class="btn-buy">Buy Now</a>
            </div>
          </div>

        </div>

      </div>

    </section> */}
    {/* <!-- End Pricing Section --> */}




    {/* <!-- ======= Team Section ======= --> */}
    <section id="team" class="team">

      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h2>Team</h2>
          <p>Our hard working team</p>
        </header>

        <div class="row gy-4">

        <div class=" col-lg-3 d-flex justify-content-between" data-aos="fade-up" data-aos-delay="200">
          </div>

          <div class="col-lg-3 col-md-7 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div class="member">
              <div class="member-img">
                <img src={require("../img/boy.png")} class="img-fluid" alt=""></img>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href="https://www.facebook.com/muzammil.ahmad41/"><i class="bi bi-facebook"></i></a>
                  <a href="https://www.instagram.com/muzammil__ahmad/"><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Muzammil Ahmad</h4>
                <span>Team Lead</span>
                <p>Software Engineer <br></br>Front-End and Back-End Developer</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-7 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div class="member">
              <div class="member-img">
              <img src={require("../img/girl.jpg")} class="img-fluid" alt=""></img>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Maham Nadeem</h4>
                <span>Project Manager</span>
                <p>Software Engineer <br></br>Front-End and Back-End Developer </p>
                            
                </div>
            </div>
          </div>

        </div>

      </div>

    </section>
    {/* <!-- End Team Section --> */}

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
            <form  class="php-email-form">
              <div class="row gy-4">

                <div class="col-md-6">
                <input type="text" name="name" class="form-control" placeholder="Your Name" value={this.state.name} onChange={this.changeNameHandler} required></input>
                </div>

                <div class="col-md-6 ">
                <input type="email" class="form-control" name="email" placeholder="Your Email" value={this.state.email} onChange={this.changeEmailHandler} required></input>
                </div>

                <div class="col-md-12">
                <input type="text" class="form-control" name="subject" placeholder="Subject" value={this.state.subject} onChange={this.changeSubjectHandler} required></input>
                </div>

                <div class="col-md-12">
                <textarea rows="6" class="form-control" name="message" placeholder="Message" value={this.state.message} onChange={this.changeMessageHandler} required></textarea>
                </div>

                <div class="col-md-12 text-center">
                  <button class="php-email-form" type="submit" onClick={this.saveOrUpdateContact}>Send Message</button>
                </div>

              </div>
            </form>

          </div>

        </div>

      </div>

    </section>

    <ScrollToTop smooth color='white' style={{backgroundColor:"blue"}} />

    {/* <!-- End Contact Section --> */}
        </div>
        )
    }
}

export default Home;