import React, { useState, useEffect, Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { Drawer } from '@atul15r/react-drawer';

import Search from "search-react-input";


import UserService from '../services/UserService'
import ReportService from '../services/ReportService'
import ContactService from '../services/ContactService'

const choices = [
  { label: "All Contacts", value: "/allcontacts" },
  { label: "All Users", value: "/allusers" },
  { label: "All Reports", value: "/allreports" },
  { label: "Users", value: "/allusers" },
  { label: "Reports", value: "/allreports" },
  { label: "Contacts", value: "/allcontacts" },
  { label: "Messages", value: "/allcontacts" },

  { label: "Add User", value: "/add-user" },
  { label: "New User", value: "/add-user" },

  { label: "Profile", value: "/profile" },

  { label: "Sales", value: "https://dashboard.stripe.com/test/subscriptions" },
  { label: "Subscriptions", value: "https://dashboard.stripe.com/test/subscriptions" },

  { label: "Manage Notes Generator", value: "https://huggingface.co/spaces/Technozam/notes" },
  { label: "Notes", value: "https://huggingface.co/spaces/Technozam/notes" },
  { label: "Notes Generator", value: "https://huggingface.co/spaces/Technozam/notes" },

  { label: "Manage Matchings Generator", value: "https://huggingface.co/spaces/Technozam/matchings" },
  { label: "Matchings", value: "https://huggingface.co/spaces/Technozam/matchings" },
  { label: "Matchings Generator", value: "https://huggingface.co/spaces/Technozam/matchings" },

  { label: "Manage Short Generator", value: "https://huggingface.co/spaces/Technozam/short" },
  { label: "Short", value: "https://huggingface.co/spaces/Technozam/short" },
  { label: "Short Generator", value: "https://huggingface.co/spaces/Technozam/short" },

  { label: "Manage True/False Generator", value: "https://huggingface.co/spaces/Technozam/truefalse" },
  { label: "True/False", value: "https://huggingface.co/spaces/Technozam/truefalse" },
  { label: "True/False Generator", value: "https://huggingface.co/spaces/Technozam/truefalse" },

  { label: "Manage Fill-in-Blanks Generator", value: "https://huggingface.co/spaces/Technozam/fillinblanks" },
  { label: "Fill-in-Blanks", value: "https://huggingface.co/spaces/Technozam/fillinblanks" },
  { label: "Fill-in-Blanks Generator", value: "https://huggingface.co/spaces/Technozam/fillinblanks" },

  { label: "Manage Mcqs Generator", value: "https://huggingface.co/spaces/Technozam/mcqs" },
  { label: "Mcqs", value: "https://huggingface.co/spaces/Technozam/mcqs" },
  { label: "Mcqs Generator", value: "https://huggingface.co/spaces/Technozam/mcqs" },
  { label: "Multiple Choice question", value: "https://huggingface.co/spaces/Technozam/mcqs" },

];


const AppHeader = () => {

  const [show, setShow] = useState(false)
  const onToggle = () => setShow(!show)

  const [users, setUsers] = useState([])
  const [countUser, setUserCount] = useState([])

  const [reports, setReports] = useState([])
  const [countReports, setReportCount] = useState([])

  const [contacts, setContacts] = useState([])
  const [countContacts, setContactsCount] = useState([])


  const [capturedSearch, setCapturedSearch] = useState([]);



  useEffect(() => {

    getAllUsers();
    getAllReports();
    getAllContacts();

  }, [])

  const getAllUsers = () => {
    UserService.getAllUsers().then((response) => {
      setUsers(response.data)
      console.log(response.data);
      setUserCount(response.data.length);
    }).catch(error => {
      console.log(error);
    })
  }


  const getAllReports = () => {
    ReportService.getAllReports().then((response) => {
      setReports(response.data)
      console.log(response.data);
      setReportCount(response.data.length);

    }).catch(error => {
      console.log(error);
    })
  }

  const getAllContacts = () => {
    ContactService.getAllContacts().then((response) => {
      setContacts(response.data)
      console.log(response.data);
      setContactsCount(response.data.length);

    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div>
      <header id="header" class="header fixed-top d-flex align-items-center">

        <div class="d-flex align-items-center justify-content-between">
          <a href="/" class="logo d-flex align-items-center" style={{ textDecoration: "none" }}>
            <img src="assets/img/logo.png" alt="" />
            <span class="d-none d-lg-block">Q-TECH</span>
          </a>
          <i class="bi bi-list mobile-nav-toggle" onClick={onToggle}>
            <Drawer
              show={show}
              onClose={onToggle}
              direction="left"
              width={200}

            >


              <ul class="sidebar-nav" id="sidebar-nav">
                <li>
                  <a href="/" class="logo d-flex align-items-center" style={{ textDecoration: "none" }}>
                    <img src="assets/img/logo.png" alt="" />
                    <span class="d-none d-lg-block">Q-TECH</span>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link " href="/ ">
                    <i class="bi bi-grid"></i>
                    <span>Dashboard</span>
                  </a>
                </li>
                {/* <!-- End Dashboard Nav --> */}

                <li class="nav-item">
                  <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                    <i class="bi bi-menu-button-wide"></i><span>Users</span><i class="bi bi-chevron-down ms-auto"></i>
                  </a>
                  <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                      <a href="/allusers">
                        <i class="bi bi-circle"></i><span>All Users</span>
                      </a>
                    </li>
                    <li>
                      <a href="/add-user">
                        <i class="bi bi-circle"></i><span>Add New User</span>
                      </a>
                    </li>

                  </ul>
                </li>
                {/* <!-- End Components Nav --> */}


                <li class="nav-heading">Pages</li>

                <li class="nav-item">
                  <a class="nav-link collapsed" href="/allusers">
                    <i class="bi bi-question-circle"></i>
                    <span>View All Users</span>
                  </a>
                </li>
                {/* <!-- End Profile Page Nav --> */}

                <li class="nav-item">
                  <a class="nav-link collapsed" href="/add-user">
                    <i class="bi bi-question-circle"></i>
                    <span>Add new User</span>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link collapsed" href="/allreports">
                    <i class="bi bi-question-circle"></i>
                    <span>Report Problems</span>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link collapsed" href="/allcontacts">
                    <i class="bi bi-question-circle"></i>
                    <span>User Messages</span>
                  </a>
                </li>

                {/* <!-- End F.A.Q Page Nav --> */}

                <li class="nav-item">
                  <a class="nav-link collapsed" href="/profile">
                    <i class="bi bi-person"></i>
                    <span>Profile</span>
                  </a>
                </li>
                {/* <!-- End profile Page Nav --> */}


              </ul>   </Drawer>

          </i>
        </div>

        {/* <Search class="search-form d-flex align-items-center "
          options={choices}
          onChange={(option, e) => setCapturedSearch(option)}
          width = {10}
          style={{marginLeft:"90px", width:"50px"}}
        /> */}

        <div
          className="container search-form d-flex align-items-center"
          style={{ display: "flex", justifyContent: "left" }
          }
        >
          <Search
            options={choices}
            onChange={(option, e) => setCapturedSearch(option)}
            spellcheck={true}
            width={400}
            inputClassName="search-form d-flex align-items-center"
          />
        </div>

        <div
          className="container search-form d-flex align-items-center"
          style={{ display: "flex", justifyContent: "left" }
          }
        >
          <a href={capturedSearch && capturedSearch.value}>{capturedSearch && capturedSearch.label}</a>

        </div>


        {/* <div style={{ marginTop: "25vh", textAlign: "center" }}>
        <h1>
          {capturedSearch && "Hello and welcome to " + capturedSearch.value}
        </h1>
      </div> */}



        <nav class="header-nav ms-auto">
          <ul class="d-flex align-items-center">

            <li class="nav-item d-block d-lg-none">

            </li>

            <li class="nav-item dropdown">

              <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i class="bi bi-bell"></i>
                <span class="badge bg-primary badge-number">{countReports}</span>
              </a>

              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications overflow-auto">
                <li class="dropdown-header">
                  You have {countReports} new notifications
                  <a href="/allreports"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                </li>

                <li>
                  <hr class="dropdown-divider" />
                </li>
                {
                  reports.map(
                    report =>

                      <ul className='notification-item' key={report.id}>


                        <i class="bi bi-info-circle text-primary"></i>

                        <div>

                          <h6>{report.module}</h6>
                          <p>{report.subject}</p>
                          <Link className="bi bi-info-circle-fill" data-bs-toggle="tooltip" data-bs-placement="top" title="View Report" to={`/view-report/${report.id}`} >View</Link>

                          {/* <td>{report.providerId}</td> */}
                          <td class="dropdown-divider">

                          </td>
                        </div>


                      </ul>
                  )
                }


                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li class="dropdown-footer">
                  <a href="/allreports">Show all notifications</a>
                </li>

              </ul>

            </li>

            {/* Contact */}

            <li class="nav-item dropdown">


              <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i class="bi bi-chat-left-text"></i>
                <span class="badge bg-success badge-number">{countContacts}</span>
              </a>

              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications overflow-auto">
                <li class="dropdown-header">
                  You have {countContacts} new message
                  <a href="/allcontacts"><span class="badge rounded-pill bg-success p-2 ms-2">View all</span></a>
                </li>

                <li>
                  <hr class="dropdown-divider" />
                </li>
                {
                  contacts.map(
                    contact =>

                      <ul className='notification-item' key={contact.id}>

                        <img height={50} width={50} style={{ marginLeft: "10px", marginRight: "20px" }} src={require('../img/boy.png')} alt="Profile" class="rounded-circle" />


                        <div>

                          <h6>{contact.name}</h6>
                          <p>{contact.subject}</p>
                          <Link className="bi bi-info-circle-fill" data-bs-toggle="tooltip" data-bs-placement="top" title="View Report" to={`/view-contact/${contact.id}`} >View</Link>

                          {/* <td>{report.providerId}</td> */}
                          <td class="dropdown-divider">

                          </td>
                        </div>


                      </ul>
                  )
                }


                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li class="dropdown-footer">
                  <a href="/allreports">Show all notifications</a>
                </li>

              </ul>

            </li>

            <li class="nav-item dropdown pe-3">

              <a class="nav-link nav-profile d-flex align-items-center pe-0 dropdown" href="#" data-bs-toggle="dropdown">
                <img src={require('../img/boy.png')} alt="Profile" class="rounded-circle" />
                <span class="d-none d-md-block dropdown-toggle ps-2">Admin</span>
              </a>

              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li class="dropdown-header">
                  <h6>Muzammil Ahmad</h6>
                  <span>Website Manager</span>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li>
                  <a class="dropdown-item d-flex align-items-center" href="/profile">
                    <i class="bi bi-person"></i>
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li>
                  <a class="dropdown-item d-flex align-items-center" href="/profile">
                    <i class="bi bi-gear"></i>
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <i class="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </a>
                </li>

              </ul>
            </li>

          </ul>
        </nav>

      </header>

      {/* <!-- ======= Sidebar ======= --> */}
      <aside id="sidebar" class="sidebar">

        <ul class="sidebar-nav" id="sidebar-nav">

          <li class="nav-item">
            <a class="nav-link " href="/ ">
              <i class="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>
          {/* <!-- End Dashboard Nav --> */}

          <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
              <i class="bi bi-menu-button-wide"></i><span>Users</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <a href="/allusers">
                  <i class="bi bi-circle"></i><span>All Users</span>
                </a>
              </li>
              <li>
                <a href="/add-user">
                  <i class="bi bi-circle"></i><span>Add New User</span>
                </a>
              </li>

            </ul>
          </li>
          {/* <!-- End Components Nav --> */}


          <li class="nav-heading">Pages</li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="/allusers">
              <i class="bi bi-question-circle"></i>
              <span>View All Users</span>
            </a>
          </li>
          {/* <!-- End Profile Page Nav --> */}

          <li class="nav-item">
            <a class="nav-link collapsed" href="/add-user">
              <i class="bi bi-question-circle"></i>
              <span>Add new User</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="/allreports">
              <i class="bi bi-question-circle"></i>
              <span>Report Problems</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="/allcontacts">
              <i class="bi bi-question-circle"></i>
              <span>User Messages</span>
            </a>
          </li>

          {/* <!-- End F.A.Q Page Nav --> */}

          <li class="nav-item">
            <a class="nav-link collapsed" href="/profile">
              <i class="bi bi-person"></i>
              <span>Profile</span>
            </a>
          </li>
          {/* <!-- End profile Page Nav --> */}


        </ul>

      </aside>
      {/* <!-- End Sidebar--> */}
    </div>

  )
}


export default AppHeader;