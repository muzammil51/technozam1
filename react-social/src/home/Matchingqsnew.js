import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { createReport, getAllMatchText, getMatchTextbyId, getAllMatchFile, getMatchFilebyId } from '../util/APIUtils';
import Alert from 'react-s-alert';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Modal from 'react-modal';

import sanitize from 'sanitize-html';

const customStyles = {
  content: {
    color: "blue",
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    // marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '30px',
  }
};

import './Home.css';

class Matchingqsnew extends Component {

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
      module: 'Matching Module',
      name: this.props.currentUser.name,
      email: this.props.currentUser.email,
      subject: '',
      problem: '',

      // Match Text Array from API
      matchtexts: [],
      matchtext: {},

      // Match File array from API
      matchfiles: [],
      matchfile: {},
    };

    //Report Problem Modal
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    //Match Text Modal
    this.newtextopenModal = this.newtextopenModal.bind(this);
    this.newtextafterOpenModal = this.newtextafterOpenModal.bind(this);
    this.newtextcloseModal = this.newtextcloseModal.bind(this);

    //Match file Modal
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
    getAllMatchText().then((res) => {
      this.setState({ matchtexts: res });
      // console.log(this.state.matchtext.subject)
    });

    // get File values through API
    getAllMatchFile().then((res) => {
      this.setState({ matchfiles: res });
      // console.log(this.state.matchfiles)
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
    getMatchTextbyId(id).then(res => {
      this.newtextopenModal
      this.setState({
        matchtext: res,
        newtextmodalIsOpen: true
      });
      console.log(res)
    })
  }

  // view each file id element
  viewFile = (id) => {
    getMatchFilebyId(id).then(res => {
      this.newfileopenModal
      this.setState({
        matchfile: res,
        newfilemodalIsOpen: true
      });
      console.log(res)
    })
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
                          <input type="text" name="module" class="form-control" placeholder="Module" value={"Matchings Module"} disabled></input>
                        </div>
                        <br /><br /><br />

                        <div class="col-md-5">
                          <input type="text" name="name" class="form-control" placeholder="Your Name" value={this.props.currentUser.name} onChange={this.changeNameHandler} disabled></input>
                        </div>
                        <br /><br /><br />

                        <div class="col-md-6 ">
                          <input type="email" class="form-control" name="email" placeholder="Your Email" value={this.props.currentUser.email} onChange={this.changeEmailHandler} disabled></input>
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
                  <h3>Matching Question Generator</h3>
                  <p>We offer you to generate Matching Questions based on text using AI technology. You just have to add your content and questions will be generated within seconds. Our goal is to generate efficient and accurate results to save your time & effort.</p>
                  <div class="text-center text-lg-start">
                  </div>
                </div>

                <div >
                  <iframe
                    style={{ height: "670px", width: "1300px" }}
                    frameBorder="0"
                    src="https://technozam-matchings.hf.space">
                  </iframe>
                </div>

              </div>

            </div>
          </div>


        </section>

        <section id="pricing" class="pricing">

          <div class="container" data-aos="fade-up">

            <header class="section-header">
              <p>Recent Uploads History</p>
            </header>

            <div class="row gy-4" style={{ marginLeft: "80px" }} data-aos="fade-left">

              {/* Text Recent History */}
              <div data-aos="zoom-out" data-aos-delay="100">
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
                            this.state.matchtexts.map(
                              matchtext =>
                                <tr key={matchtext.id}>
                                  <td> {matchtext.id} </td>
                                  <td> {matchtext.subject} </td>
                                  <td> {matchtext.timedate} </td>
                                  <button style={{ margin: "10px", color: "white" }} onClick={() => this.viewText(matchtext.id)} className="badge rounded-pill bg-primary"><i class="bi bi-plus-lg"></i>View More</button>

                                  <Modal
                                    isOpen={this.state.newtextmodalIsOpen}
                                    onAfterOpen={this.newtextafterOpenModal}
                                    onRequestClose={this.newtextcloseModal}
                                    style={customStyles}
                                  >
                                    <div class="modal-header">
                                      <h4 class="h4 modal-title">Report a Problem</h4>
                                      <button class="close" onClick={this.newtextcloseModal}>&times;</button>
                                    </div>


                                    <div class="modal-body">
                                      <form>
                                        <div class="row gy-6">

                                          <div class="col-md-5">
                                            <h4 style={{ color: "GrayText" }}>Subject:  </h4>
                                            <b>{this.state.matchtext.subject}</b>
                                          </div>

                                          <div class="col-md-5">
                                            <h4 style={{ color: "GrayText" }}>Date/Time:</h4>
                                            <h4 style={{ color: "GrayText" }}>{this.state.matchtext.timedate}  </h4>
                                          </div>
                                          <br /><br />

                                          <div style={{ width: "100%", display: "flex" }}>
                                            <div style={{ width: "50%", float: "left", }}>

                                              <h4 style={{ color: "GrayText" }}>Input:</h4>
                                              <textarea rows="7" class="form-control" value={this.state.matchtext.input} required></textarea>
                                            </div>

                                            <div style={{ flex: "1", marginLeft: "2%" }}>

                                              <h4 style={{ color: "GrayText" }}>Output:</h4>
                                              <textarea rows="7" class="form-control" value={sanitize(this.state.matchtext.output, { allowedTags: [], allowedAttributes: {} })} required></textarea>

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

              {/* File Recent History */}
              <div class="col-lg-6" style={{ marginLeft: "40px" }} data-aos="zoom-in" data-aos-delay="100">
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
                          this.state.matchfiles.map(
                            matchfile =>
                              <tr key={matchfile.id}>
                                <td> {matchfile.id} </td>
                                <td> {matchfile.subject} </td>
                                <td> {matchfile.timedate} </td>
                                <button style={{ margin: "10px", color: "white" }} onClick={() => this.viewFile(matchfile.id)} className="badge rounded-pill bg-primary"><i class="bi bi-plus-lg"></i>View More</button>

                                {/* <td><a href="#" role="button" onClick={this.newopenModal}>See more</a></td> */}

                                <Modal
                                  isOpen={this.state.newfilemodalIsOpen}
                                  onAfterOpen={this.newfileafterOpenModal}
                                  onRequestClose={this.newfilecloseModal}
                                  style={customStyles}
                                >
                                  <div class="modal-header">
                                    <h4 class="h4 modal-title">Report a Problem</h4>
                                    <button class="close" onClick={this.newfilecloseModal}>&times;</button>
                                  </div>


                                  <div class="modal-body">
                                    <form>
                                      <div class="row gy-6">

                                        <div class="col-md-5">
                                          <h4 style={{ color: "GrayText" }}>Subject:  </h4>
                                          <b>{this.state.matchfile.subject}</b>
                                        </div>

                                        <div class="col-md-5">
                                          <h4 style={{ color: "GrayText" }}>Date/Time:</h4>
                                          <h4 style={{ color: "GrayText" }}>{this.state.matchfile.timedate}  </h4>
                                        </div>
                                        <br /><br />

                                        <div style={{ width: "100%", display: "flex" }}>
                                          <div style={{ width: "50%", float: "left", }}>

                                            <h4 style={{ color: "GrayText" }}>Input:</h4>
                                            <textarea rows="7" class="form-control" value={this.state.matchfile.input}></textarea>
                                          </div>

                                          <div style={{ flex: "1", marginLeft: "2%" }}>

                                            <h4 style={{ color: "GrayText" }}>Output:</h4>
                                            <textarea rows="7" class="form-control" value={sanitize(this.state.matchfile.output, { allowedTags: [], allowedAttributes: {} })}></textarea>

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
      </div>
    )
  }
}

export default Matchingqsnew;