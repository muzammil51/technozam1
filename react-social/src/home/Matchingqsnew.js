import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { createReport } from '../util/APIUtils';
import Alert from 'react-s-alert';



import AOS from 'aos';
import 'aos/dist/aos.css';

import { CsvToHtmlTable } from 'react-csv-to-table';
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
      modalIsOpen: false,
      // step 2
      id: this.props.match.params.id,
      module: 'Matching Module',
      name: '',
      email: '',
      subject: '',
      problem: '',
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeSubjectHandler = this.changeSubjectHandler.bind(this);
    this.changeProblemHandler = this.changeProblemHandler.bind(this);

    this.saveOrUpdateProblem = this.saveOrUpdateProblem.bind(this);

  }

  componentDidMount() {
    AOS.init();

    this.GetData();
    this.GetDataFile();

  }

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


  GetData() {
    this.fetchCsv().then((res) => {
      // console.log(Papa.parse(res));
      this.setState({
        myData: res
      })
      console.log(this.state.myData);
    })
  }
  GetDataFile() {
    this.fetchCsvFile().then((res) => {
      // console.log(Papa.parse(res));
      this.setState({
        newData: res
      })
      console.log(this.state.newData);
    })
  }


  async fetchCsv() {
    const response = await fetch('New folder/Matchings/file_data/log.csv');
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result.value);
    // console.log('csv', sanitize(csv , {
    //   allowedTags: [],
    //   allowedAttributes: []
    // }));
    return sanitize(csv, {
      allowedTags: [],
      allowedAttributes: []
    });
  }

  async fetchCsvFile() {
    const response = await fetch('New folder/Matchings/file_data/fileupload.csv');
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result.value);
    // console.log('csv', sanitize(csv , {
    //   allowedTags: [],
    //   allowedAttributes: []
    // }));
    return sanitize(csv, {
      allowedTags: [],
      allowedAttributes: []
    });
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
                          <input type="text" name="name" class="form-control" placeholder="Your Name" value={this.state.name} onChange={this.changeNameHandler} required></input>
                        </div>
                        <br /><br /><br />

                        <div class="col-md-6 ">
                          <input type="email" class="form-control" name="email" placeholder="Your Email" value={this.state.email} onChange={this.changeEmailHandler} required></input>
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
              </div>

            </div>
          </div>
          <div style={{ height: "550px", width: "1400px" }}>
            <iframe style={{ height: "670px", width: "1370px" }} frameBorder="0" src='http://127.0.0.1:7862/'></iframe>
            <p class="getstarted btn-get-started"><a href="http://127.0.0.1:7862/" target="myFrame">Open in Full Screen</a></p>
          </div>

        </section>

        <p className="text-center bg" style={{ marginTop: '30px', }}>Recent Uploads</p>


        <div class='row' style={{ marginTop: '30px' }}>
          <div class="profile-info col-5" style={{ marginLeft: '20px' }}>
            <div class="card mb-7">
              <p>File Uploads</p>
            </div>

            <div>
              {
                (this.state != undefined) ?
                  <CsvToHtmlTable
                    data={this.state.myData}
                    csvDelimiter=","
                    tableClassName="table table-responsive table-bordered table-hover table-striped table-sm"

                  />
                  : null
              }


            </div>
          </div>


          <div class="profile-info col-6" style={{ marginLeft: "0px" }}>
            <div class="card mb-7">
              <p>Text Uploads</p>
            </div>
            <div>
              {
                (this.state != undefined) ?
                  <CsvToHtmlTable
                    data={this.state.newData}
                    csvDelimiter=","
                    tableClassName="table table-responsive table-bordered table-hover table-striped table-sm"

                  />
                  : null
              }


            </div>
          </div>

          {/* <div class="col-lg-4">
        <div class="card mb-4">
        <p class="mb-4"><span class="text-primary font-italic me-1"></span> History
                  </p>
                  
               
        </div> 
            </div> */}


        </div>


      </div>
    )
  }
}

export default Matchingqsnew;