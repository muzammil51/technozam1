import React, { Component } from 'react';
import './Profile.css';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import 'bootstrap-icons/font/bootstrap-icons.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Alert } from 'bootstrap';
import ScrollToTop from "react-scroll-to-top";



class Profilenew extends Component {


  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }


  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {


    return (
      <div>

        <div style={{ height: 50 }}></div>
        <div className="container">
          <div className="profile-info">
            <div className="profile-name">

              <h2 hidden>{this.props.currentUser.name}</h2>
              <p className="profile-email" hidden>{this.props.currentUser.email} </p>

            </div>
          </div>
        </div>

        <div class="row">

          <div class="col-lg-5" style={{ marginLeft: "20px" }}>
            <div class="card mb-3">
              <div class="card-body text-center profile-name">
                <br></br>
                {
                  this.props.currentUser.imageUrl ? (
                    <img src={this.props.currentUser.imageUrl} alt={this.props.currentUser.name} class="rounded-circle img-fluid" />
                  ) : (
                    <div className="text-avatar">
                      <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                    </div>
                  )
                }
                <h2>{this.props.currentUser.name}</h2>
                <p className="profile-email">{this.props.currentUser.email} </p>
                <p class="text-muted">{this.props.currentUser.provider} account</p>
                <p class="text-muted">Subscribed to Q-Tech</p>

                <div class="d-flex justify-content-center mb-1">
                  <NavLink style={{ borderRadius: "60px" }} type="button" class="btn btn-outline-danger" onClick={this.props.onLogout} to="/home">Logout</NavLink>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md">
            <div class="card">
              <div class="card-body">
                <br></br>

                <Tabs>

                  <TabList>
                    <Tab>User Overview</Tab>
                    <Tab>Subscription Details</Tab>
                    <Tab>Settings</Tab>
                  </TabList>

                  {/* tab 1 content */}
                  <TabPanel>
                    <div class="tab-pane fade show active profile-overview" id="profile-overview">
                      <h5 class="card-title">About</h5>
                      <p class="small fst-italic">We are team called <b><i>"Prime Art"</i></b> making impossible possible by using AI. Systems that think and make teaching interesting and less time taking. Smart technology for a better future. </p>

                      <h5 class="card-title">Profile Details</h5>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label ">Full Name</div>
                        <div class="col-lg-9 col-md-8">{this.props.currentUser.name}</div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Email</div>
                        <div class="col-lg-9 col-md-8">{this.props.currentUser.email}</div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Company</div>
                        <div class="col-lg-9 col-md-8">Q-Tech</div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Account Type</div>
                        <div class="col-lg-9 col-md-8">{this.props.currentUser.provider}</div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Country</div>
                        <div class="col-lg-9 col-md-8">Pakistan</div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Address</div>
                        <div class="col-lg-9 col-md-8">Beaconhouse National University, Lahore</div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Phone</div>
                        <div class="col-lg-9 col-md-8">(+92) 486-3538</div>
                      </div>

                    </div>
                  </TabPanel>


                {/* tab 3 content */}
                <TabPanel>
                  <h5 class="card-title">Login to Stripe to view Subscription Details</h5>
                  <p class="small fst-italic">To view your <b><i>"Subscription Plan/Payment Details"</i></b> login to stripe using your email.</p>

                  <a type="button" class="btn btn-outline-primary" style={{ borderRadius: "60px" }}
                    href={'https://billing.stripe.com/p/login/test_5kAaHZ9Wh6O46wU6oo?prefilled_email=' + this.props.currentUser.email}
                  >
                    Login to Stripe</a>
                </TabPanel>

                {/* tab 4 content */}
                <TabPanel>
                  <form>

                    <div class="row mb-3">
                      <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Email Notifications</label>
                      <div class="col-md-8 col-lg-9">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="changesMade" checked />
                          <label class="form-check-label" for="changesMade">
                            Changes made to your account
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="newProducts" checked />
                          <label class="form-check-label" for="newProducts">
                            Information on new products and services
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="proOffers" />
                          <label class="form-check-label" for="proOffers">
                            Marketing and promo offers
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="securityNotify" checked disabled />
                          <label class="form-check-label" for="securityNotify">
                            Security alerts
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="text-center">
                      <button type="submit" class="btn btn-primary">Save Changes</button>
                    </div>
                  </form>

                </TabPanel>
              </Tabs>

            </div>
          </div>
        </div>

      </div>


    {/* <!-- ======= Services Section ======= --> */ }
    <section id="services" class="services">

      <div class="container">

        <header class="section-header">
          <h2>Services</h2>
          <p>Services you can use</p>
        </header>

        <div class="row gy-4">


          <div class="col-lg-4 col-md-6">
            <div class="service-box blue">
              <i class="ri-discuss-line icon"></i>
              <h3>Short Question Generator</h3>
              <p>We offer you to generate short questions based on text using AI technology. You just have to add your content and questions will be generated within seconds. Our goal is to generate efficient and accurate results to save your time & effort.</p>

              <a href='shortqsnew#gen' class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-box orange">
              <i class="ri-discuss-line icon"></i>
              <h3>MCQs Generator</h3>
              <p>We offer you to generate MCQs questions based on text using AI technology. You just have to add your content and MCQs will be generated within seconds. Our goal is to generate efficient and accurate results to save your time & effort.</p>
              <a href="mcqsqsnew#gen" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-box green">
              <i class="ri-discuss-line icon"></i>
              <h3>Fill-in-blank Generator</h3>
              <p>We offer you to generate Fill-in-Blanks questions based on text using AI technology. You just have to add your content and fill-in-blanks questions will be generated within seconds. Our goal is to generate efficient and accurate results to save your time & effort.</p>
              <a href="fillblankqsnew#gen" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-box red">
              <i class="ri-discuss-line icon"></i>
              <h3>True/False Generator</h3>
              <p>We offer you to generate True/False questions based on text using AI technology. You just have to add your content and True/False questions will be generated within seconds. Our goal is to generate efficient and accurate results to save your time & effort.</p>
              <a href="truefalseqsnew#gen" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-box purple">
              <i class="ri-discuss-line icon"></i>
              <h3>Matchings Generator</h3>
              <p>We offer you to generate Matchings questions based on text using AI technology. You just have to add your content and Matchings questions will be generated within seconds. Our goal is to generate efficient and accurate results to save your time & effort.</p>
              <a href="matchingqsnew#gen" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-box pink">
              <i class="ri-discuss-line icon"></i>
              <h3>Notes Generator</h3>
              <p>We offer you to generate Notes based on text using AI technology. You just have to add your content and notes will be generated within seconds. Our goal is to generate efficient and accurate results to save your time & effort.</p>
              <a href="notesqsnew#gen" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

        </div>

      </div>

    </section>
    <ScrollToTop smooth color='white' style={{backgroundColor:"blue"}} />

    {/* <!-- End Services Section --> */ }

      </div >



    );
  }
}

export default Profilenew


