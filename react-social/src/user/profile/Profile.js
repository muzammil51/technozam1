import React, { Component } from 'react';
import './Profile.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


class Profile extends Component {

  
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
    

            <div>
                    
                <div style={{height:50}}></div>
                <div className="container">
                    <div className="profile-info">
                        <div className="profile-avatar">
                            {/* { 
                                this.props.currentUser.imageUrl ? (
                                    <img src={this.props.currentUser.imageUrl} alt={this.props.currentUser.name}/>
                                ) : (
                                    <div className="text-avatar">
                                        <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                    </div>
                                )
                            } */}
                        </div>
                        <div className="profile-name">
                           <h2 hidden>{this.props.currentUser.name}</h2>
                           <p className="profile-email" hidden>{this.props.currentUser.email} </p>
                        </div>
                    </div>
                </div>   


    <div class="row">
      <div class="col-lg-5" style={{marginLeft:"20px"}}>
        <div class="card mb-3">
          <div class="card-body text-center profile-name">
            {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              class="rounded-circle img-fluid" style="width: 150px;"> */}
                                          { 
                                this.props.currentUser.imageUrl ? (
                                    <img src={this.props.currentUser.imageUrl} alt={this.props.currentUser.name} class="rounded-circle img-fluid"/>
                                ) : (
                                    <div className="text-avatar">
                                        <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                    </div>
                                )
                            }
                                       <h2>{this.props.currentUser.name}</h2>
                           <p className="profile-email">{this.props.currentUser.email} </p>
            <p class="text-muted">{this.props.currentUser.provider} account</p>
            <div class="d-flex justify-content-center mb-1">
              <NavLink type="button" class="btn btn-primary" onClick={this.props.onLogout} to="/home">Logout</NavLink>
            </div>
          </div>
        </div> 
            </div>

            <div class="col-lg-6 col-md">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Full Name</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{this.props.currentUser.name}</p>
              </div>
            </div>
       
            <hr></hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Email</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{this.props.currentUser.email}</p>
              </div>
            </div>
            <hr></hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Phone No.</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">0000 - 0000000</p>
              </div>
            </div>
            <hr></hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Account Type</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{this.props.currentUser.provider} Account</p>
              </div>
            </div>
            <hr></hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Institute</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">Beaconhouse National University</p>
              </div>
            </div>
            <hr></hr>
            <div class="row">
              <div class="col-sm-9">
              </div>
              <div >
                <button type="button" class="btn btn-block btn-primary">Edit </button>

              </div>
            </div>

            </div>
        </div>
            </div>

            </div>
            <br></br>

            <div class="row">
      <div class="col-lg-5">
        <div class="card mb-6" style={{marginLeft:"20px"}}>
          <p>Text Uploads</p>
        </div> 
            </div>
            <div class="col-lg-6" style={{marginLeft:"20px"}}>
        <div class="card mb-8">
         <p>File Uploads</p>
        </div> 
            </div>

            {/* <div class="col-lg-4">
        <div class="card mb-4">
        <p class="mb-4"><span class="text-primary font-italic me-1"></span> History
                  </p>
                  
               
        </div> 
            </div> */}

            
            </div>

   {/* <!-- ======= Services Section ======= --> */}
   <section id="services" class="services">

<div class="container" data-aos="fade-up">

  <header class="section-header">
    <h2>Services</h2>
    <p>Services you can use</p>
  </header>

  <div class="row gy-4">

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
      <div class="service-box blue">
        <i class="ri-discuss-line icon"></i>
        <h3>Short Question Generator</h3>
        <p>We offer you to generate short questions based on text using AI technology. You just have to add your content and questions will be generated within seconds. Our goal is to generate efficient and accurate results to save your time & effort.</p>

        <a href='shortqsnew#gen' class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
      <div class="service-box orange">
        <i class="ri-discuss-line icon"></i>
        <h3>MCQs Generator</h3>
        <p>We offer you to generate MCQs questions based on text using AI technology. You just have to add your content and MCQs will be generated within seconds. Our goal is to generate efficient and accurate results to save your time & effort.</p>
        <a href="mcqsqsnew#gen" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
      <div class="service-box green">
        <i class="ri-discuss-line icon"></i>
        <h3>Fill-in-blank Generator</h3>
        <p>We offer you to generate Fill-in-Blanks questions based on text using AI technology. You just have to add your content and fill-in-blanks questions will be generated within seconds. Our goal is to generate efficient and accurate results to save your time & effort.</p>
        <a href="fillblankqsnew#gen" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
      <div class="service-box red">
        <i class="ri-discuss-line icon"></i>
        <h3>True/False Generator</h3>
        <p>We offer you to generate True/False questions based on text using AI technology. You just have to add your content and True/False questions will be generated within seconds. Our goal is to generate efficient and accurate results to save your time & effort.</p>
        <a href="truefalseqsnew#gen" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
      <div class="service-box purple">
        <i class="ri-discuss-line icon"></i>
        <h3>Matchings Generator</h3>
        <p>We offer you to generate Matchings questions based on text using AI technology. You just have to add your content and Matchings questions will be generated within seconds. Our goal is to generate efficient and accurate results to save your time & effort.</p>
        <a href="matchingqsnew#gen" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
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
{/* <!-- End Services Section --> */}




            </div>

            
            
        );
    }
}

export default Profile


