import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (

            <div>
                <br></br>
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
                           <h2>{this.props.currentUser.name}</h2>
                           <p className="profile-email">{this.props.currentUser.email} </p>
                        </div>
                    </div>
                </div>   


    <div class="row">
      <div class="col-lg-4">
        <div class="card mb-4">
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
            <p class="text-muted mb-1">Full Stack Developer</p>
            <div class="d-flex justify-content-center mb-1">
              <button type="button" class="btn btn-primary">Follow</button>
              <button type="button" class="btn btn-outline-primary ms-1">Message</button>
            </div>
          </div>
        </div> 
            </div>

            <div class="col-lg-7 col-md">
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
                <p class="mb-0">Qualification</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">B.S Software Engineer</p>
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
                <p class="mb-0">Phone</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">(097) 234-5678</p>
              </div>
            </div>
            <hr></hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Mobile</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">(098) 765-4321</p>
              </div>
            </div>
            <hr></hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Address</p>
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
      <div class="col-lg-4">
        <div class="card mb-4">
          <p>To Do List</p>
        </div> 
            </div>
            <div class="col-lg-4">
        <div class="card mb-4">
         <p>Calender</p>
        </div> 
            </div>

            <div class="col-lg-4">
        <div class="card mb-4">
        <p class="mb-4"><span class="text-primary font-italic me-1"></span> History
                  </p>
               
        </div> 
            </div>

            
            </div>

            
            <div>
        <div style={{ height:"600px",width:"1000px"}}>
          <iframe style={{marginLeft:"250px", height:"550px",width:"800px"}} src='https://89f7a59bb8740e5c.gradio.app
'></iframe>
        {/* <p><a href="https://0886720f69ba3b7d.gradio.app" target="myFrame">Generate Short Questions</a></p>      */}
           </div> 
            </div>

 

            </div>

            
            
        );
    }
}

export default Profile