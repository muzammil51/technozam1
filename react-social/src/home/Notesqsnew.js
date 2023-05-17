import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { createReport, getAllNotesText, getNotesTextbyId, getAllNotesFile, getNotesFilebyId } from '../util/APIUtils';
import Alert from 'react-s-alert';

import AOS from 'aos';
import 'aos/dist/aos.css';
import sanitize from 'sanitize-html';
import ScrollToTop from "react-scroll-to-top";


import Modal from 'react-modal';

import './Home.css';

const customStyles = {
  content: {
    color: "blue",
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '30px',
    width: '70%'

  }
};
class Notesqsnew extends Component {


  constructor(props) {
    super(props);
    console.log(props)

    this.state = {
      // report problem Modal
      modalIsOpen: false,

      // text history Modal
      newtextmodalIsOpen: false,

      // file history Modal
      newfilemodalIsOpen: false,


      // Report problem form values
      id: this.props.match.params.id,
      module: 'Notes Module',
      name: this.props.currentUser.name,
      email: this.props.currentUser.email,
      subject: '',
      problem: '',

      // Notes Text Array from API
      notestexts: [],
      notestext: {},

      // Notes File array from API
      notesfiles: [],
      notesfile: {},

    };


    //Report Problem Modal
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    //Notes Text Modal
    this.newtextopenModal = this.newtextopenModal.bind(this);
    this.newtextafterOpenModal = this.newtextafterOpenModal.bind(this);
    this.newtextcloseModal = this.newtextcloseModal.bind(this);

    //Notes file Modal
    this.newfileopenModal = this.newfileopenModal.bind(this);
    this.newfileafterOpenModal = this.newfileafterOpenModal.bind(this);
    this.newfilecloseModal = this.newfilecloseModal.bind(this);

    // Report Problem Form Input change handler
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeSubjectHandler = this.changeSubjectHandler.bind(this);
    this.changeProblemHandler = this.changeProblemHandler.bind(this);

    //Save Report Prblem
    this.saveOrUpdateProblem = this.saveOrUpdateProblem.bind(this);

    // View Text and File from database
    this.viewText = this.viewText.bind(this);
    this.viewFile = this.viewFile.bind(this)

  }


  componentDidMount() {
    AOS.init();

    // get text values through API
    getAllNotesText().then((res) => {
      this.setState({ notestexts: res });
      // console.log(this.state.notestext.subject)
    });

    // get File values through API
    getAllNotesFile().then((res) => {
      this.setState({ notesfiles: res });
      // console.log(this.state.notesfiles)
    });
  }

  // save report problem into database
  saveOrUpdateProblem = (e) => {
    e.preventDefault();
    let reportRequest = { module: this.state.module, name: this.state.name, email: this.state.email, subject: this.state.subject, problem: this.state.problem };
    console.log('report => ' + JSON.stringify(reportRequest));

    // step 5
    createReport(reportRequest).then(res => {
      Alert.success("Your problem has been reported.");
      this.setState({ modalIsOpen: false });
    });

    this.closeModal
  }

  // view each text id element
  viewText = (id) => {
    getNotesTextbyId(id).then(res => {
      this.newtextopenModal
      this.setState({
        notestext: res,
        newtextmodalIsOpen: true
      });
      console.log(res)
    })
  }

  // view each file id element
  viewFile = (id) => {
    getNotesFilebyId(id).then(res => {
      this.newfileopenModal
      this.setState({
        notesfile: res,
        newfilemodalIsOpen: true
      });
      console.log(res)
    })
  }

  changeHandler = (event) => {
    this.setState({ newid: event.target.value });
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
  changeProblemHandler = (event) => {
    this.setState({ problem: event.target.value });
  }


  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'white';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  // new text modal
  newtextopenModal() {
    this.setState({ newtextmodalIsOpen: true });
  }

  newtextafterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'white';
  }

  newtextcloseModal() {
    this.setState({ newtextmodalIsOpen: false });
  }


  // new file modal
  newfileopenModal() {
    this.setState({ newfilemodalIsOpen: true });
  }

  newfileafterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'white';
  }

  newfilecloseModal() {
    this.setState({ newfilemodalIsOpen: false });
  }

  downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('myInput').value]);
    element.href = URL.createObjectURL(file);
    element.download = ([document.getElementById('myTitle').value]);
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }


  render() {
    return (

      <div>

        {/* <!-- ======= Generator Section ======= --> */}
        <section id="gen" class="about">

          <div class="container" data-aos="fade-up">
            <div class="row gx-0">

              <div class="d-flex flex-column justify-content-center" data-aos="fade-up" >
                <button type="button" class="btn btn-primary" onClick={this.openModal} style={{ marginLeft: "auto", borderRadius: '60px' }}> Report a problem</button>

                <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                >
                  <div class="modal-header">
                    <h4 class="h2 modal-title">Report a Problem</h4>

                    <button class="close" onClick={this.closeModal}>&times;</button>
                  </div>


                  <div class="modal-body">
                    <form>
                      <div class="row gy-6">

                        <div class="col-md-5">
                          <input type="text" name="module" class="form-control" placeholder="Module" value={"Notes Module"} disabled></input>
                        </div>
                        <br /><br /><br />

                        <div class="col-md-5">
                          <input type="text" name="name" class="form-control" placeholder="Your Name" value={this.props.currentUser.name} disabled></input>
                        </div>
                        <br /><br /><br />

                        <div class="col-md-6 ">
                          <input type="email" class="form-control" name="email" placeholder="Your Email" value={this.props.currentUser.email} disabled></input>
                        </div>
                        <br /><br /><br />

                        <div class="col-md-11">
                          <input type="text" class="form-control" name="subject" placeholder="Subject" value={this.state.subject} onChange={this.changeSubjectHandler} required></input>
                        </div>
                        <br /><br /><br />

                        <div class="col-md-11">
                          <textarea class="form-control" name="problem" placeholder="Problem" value={this.state.problem} onChange={this.changeProblemHandler} required></textarea>
                        </div>
                        <br /><br /><br />

                      </div>
                    </form>
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary" onClick={this.saveOrUpdateProblem} style={{ marginLeft: "auto", borderRadius: '60px' }}>Submit</button>
                  </div>

                </Modal>
                {/* <!-- Modal --> */}
                <div class="content">
                  <h3>Notes Generator</h3>
                  <p>We offer you to generate Notes based on text using AI technology. You just have to add your content and questions will be generated within seconds. Our goal is to generate efficient and accurate results to save your time & effort.</p>
                  <a type="button" class="btn btn-link" href='tutorial' style={{ color: 'blue', float: "right" }}>View Tutorial</a>

                </div>

              </div>

            </div>
          </div>

          <div>
            <iframe
              class="container-fluid"
              style={{ height: "670px" }}
              frameBorder="0"
              src="https://technozam-notes.hf.space/?__theme=light">
            </iframe>
          </div>


        </section>
        <section id="pricing" class="pricing">

          <div class="container" data-aos="fade-up">

            <header class="section-header">
              <p>Recent Uploads History</p>
            </header>

            <div class="row gy-4" data-aos="fade-left">

              {/* Text Recent History */}
              <div className='col-lg-6' data-aos="zoom-out" data-aos-delay="100">
                <div class="box">

                  <div>
                    <div >
                      <header class="section-header">
                        <h2>Recent Text Upload History</h2>
                      </header>

                      <table style={{ height: "300px" }} className="table table-borderless table-hover table-responsive">

                        <thead class="thead-dark">
                          <tr>
                            <th> ID#</th>
                            <th> Subject</th>
                            <th> TimeStamp</th>
                            <th> Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            this.state.notestexts.map(
                              notestext =>
                                <tr key={notestext.id}>
                                  <td> {notestext.id} </td>
                                  <td> {notestext.subject} </td>
                                  <td> {notestext.timedate} </td>
                                  <button style={{ margin: "10px", color: "white" }} onClick={() => this.viewText(notestext.id)} className="badge rounded-pill bg-primary"><i class="bi bi-plus-lg"></i>View More</button>

                                  <Modal
                                    isOpen={this.state.newtextmodalIsOpen}
                                    onAfterOpen={this.newtextafterOpenModal}
                                    onRequestClose={this.newtextcloseModal}
                                    style={customStyles}
                                  >

                                    <div class="modal-body">
                                      <button class="close" onClick={this.newtextcloseModal}>&times;</button>

                                      <form>
                                        <div class="row gy-7">

                                          <div>
                                            <h4 style={{ color: "GrayText" }}>Subject:  <b style={{ color: "blue", marginLeft: "5px" }}>{this.state.notestext.subject}</b></h4>
                                            <p style={{ color: "GrayText" }}>Date/Time: {this.state.notestext.timedate}</p>
                                          </div>

                                          <br /><br />

                                          <div style={{ width: "100%", display: "flex" }}>
                                            <div style={{ width: "50%", float: "left", }}>

                                              <h4 style={{ color: "GrayText" }}>Input:</h4>
                                              <textarea rows="7" class="form-control" value={this.state.notestext.input}></textarea>
                                            </div>

                                            <div style={{ flex: "1", marginLeft: "2%" }}>
                                              <h4 style={{ color: "GrayText" }}>Output: <span><button style={{ color: "white" }} type="button" class="badge rounded-pill bg-info float-right" onClick={this.downloadTxtFile}>Save to file</button></span></h4>
                                              {/* defaultValue={sanitize(this.state.shorttext.output, { allowedTags: ["br"], allowedAttributes: {} }).split("<br />").map(place => <p> {place} </p>)} */}
                                              <div contentEditable="true" class="form-control overflow-auto" style={{ height: "325px" }}><p>{sanitize(this.state.notestext.output, { allowedTags: ["br"], allowedAttributes: {} }).split("<br />").map(place => <p> {place} </p>)} </p></div>
                                              <input type='hidden' id="myInput" defaultValue={sanitize(this.state.notestext.output, { allowedTags: [], allowedAttributes: {} })} />
                                              <input type='hidden' id="myTitle" defaultValue={this.state.notestext.subject} />

                                            </div>
                                          </div>

                                        </div>
                                      </form>
                                    </div>

                                  </Modal>
                                </tr>
                            )
                          }
                        </tbody>
                      </table>


                    </div>




                  </div>


                </div>
              </div>

              {/* File Recent history */}
              <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
                <div class="box">
                  <div style={{ marginLeft: "10px" }}>
                    <header class="section-header">
                      <h2>Recent File Upload History</h2>
                    </header>
                    <table style={{ height: "300px" }} className="table table-borderless table-hover table-responsive">

                      <thead class="thead-dark">
                        <tr>
                          <th> ID#</th>
                          <th> Subject</th>
                          <th> TimeStamp</th>
                          <th> Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.notesfiles.map(
                            notesfile =>
                              <tr key={notesfile.id}>
                                <td> {notesfile.id} </td>
                                <td> {notesfile.subject} </td>
                                <td> {notesfile.timedate} </td>
                                <button style={{ margin: "10px", color: "white" }} onClick={() => this.viewFile(notesfile.id)} className="badge rounded-pill bg-primary"><i class="bi bi-plus-lg"></i>View More</button>

                                <Modal
                                  isOpen={this.state.newfilemodalIsOpen}
                                  onAfterOpen={this.newfileafterOpenModal}
                                  onRequestClose={this.newfilecloseModal}
                                  style={customStyles}
                                >

                                  <div class="modal-body">
                                    <button class="close" onClick={this.newfilecloseModal}>&times;</button>

                                    <form>
                                      <div class="row gy-7">

                                        <div>
                                          <h4 style={{ color: "GrayText" }}>Subject:  <b style={{ color: "blue", marginLeft: "5px" }}>{this.state.notesfile.subject}</b></h4>
                                          <p style={{ color: "GrayText" }}>Date/Time: {this.state.notesfile.timedate}</p>
                                        </div>

                                        <br /><br />

                                        <div style={{ width: "100%", display: "flex" }}>
                                          <div style={{ width: "50%", float: "left", }}>

                                            <h4 style={{ color: "GrayText" }}>Input:</h4>
                                            <textarea rows="7" class="form-control" value={this.state.notesfile.input}></textarea>
                                          </div>

                                          <div style={{ flex: "1", marginLeft: "2%" }}>
                                            <h4 style={{ color: "GrayText" }}>Output: <span><button style={{ color: "white" }} type="button" class="badge rounded-pill bg-info float-right" onClick={this.downloadTxtFile}>Save to file</button></span></h4>
                                            {/* defaultValue={sanitize(this.state.shorttext.output, { allowedTags: ["br"], allowedAttributes: {} }).split("<br />").map(place => <p> {place} </p>)} */}
                                            <div contentEditable="true" class="form-control overflow-auto" style={{ height: "325px" }}><p>{sanitize(this.state.notesfile.output, { allowedTags: ["br"], allowedAttributes: {} }).split("<br />").map(place => <p> {place} </p>)} </p></div>
                                            <input type='hidden' id="myInput" defaultValue={sanitize(this.state.notesfile.output, { allowedTags: [], allowedAttributes: {} })} />
                                            <input type='hidden' id="myTitle" defaultValue={this.state.notesfile.subject} />

                                          </div>
                                        </div>

                                      </div>
                                    </form>
                                  </div>

                                </Modal>
                              </tr>
                          )
                        }
                      </tbody>
                    </table>


                  </div>
                </div>
              </div>


            </div>

          </div>

        </section>
        <ScrollToTop smooth color='white' style={{ backgroundColor: "blue" }} />


      </div>

    )
  }
}

export default Notesqsnew;