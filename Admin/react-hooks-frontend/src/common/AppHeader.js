import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


class AppHeader extends Component {

  render() {
    return (
      <div>
        <header id="header" class="header fixed-top d-flex align-items-center">

          <div class="d-flex align-items-center justify-content-between">
            <a href="/" class="logo d-flex align-items-center" style={{ textDecoration: "none" }}>
              <img src="assets/img/logo.png" alt="" />
              <span class="d-none d-lg-block">Q-TECH</span>
            </a>
            <i class="bi bi-list toggle-sidebar-btn"></i>
          </div>

          <div class="search-bar">
            <form class="search-form d-flex align-items-center" method="POST" action="#">
              <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
              <button type="submit" title="Search"><i class="bi bi-search"></i></button>
            </form>
          </div>

          <nav class="header-nav ms-auto">
            <ul class="d-flex align-items-center">

              <li class="nav-item d-block d-lg-none">
                <a class="nav-link nav-icon search-bar-toggle " href="#">
                  <i class="bi bi-search"></i>
                </a>
              </li>

              <li class="nav-item dropdown">

                <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                  <i class="bi bi-bell"></i>
                  <span class="badge bg-primary badge-number">4</span>
                </a>

                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                  <li class="dropdown-header">
                    You have 4 new notifications
                    <a href="/allreports"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <li class="notification-item">
                    <i class="bi bi-exclamation-circle text-warning"></i>
                    <div>
                      <h4>Notes Generator</h4>
                      <p>Server slow error</p>
                      <p>30 min. ago</p>
                    </div>
                  </li>

                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <li class="notification-item">
                    <i class="bi bi-x-circle text-danger"></i>
                    <div>
                      <h4>Short Question Generator</h4>
                      <p>Slow response rate</p>
                      <p>1 hr. ago</p>
                    </div>
                  </li>

                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <li class="notification-item">
                    <i class="bi bi-info-circle text-primary"></i>
                    <div>
                      <h4>Database Error</h4>
                      <p>Slow rate</p>
                      <p>3 hrs. ago</p>
                    </div>
                  </li>


                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <li class="notification-item">
                    <i class="bi bi-info-circle text-primary"></i>
                    <div>
                      <h4>Database Error</h4>
                      <p>Storage error</p>
                      <p>4 hrs. ago</p>
                    </div>
                  </li>

                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li class="dropdown-footer">
                    <a href="/allreports">Show all notifications</a>
                  </li>

                </ul>

              </li>

              <li class="nav-item dropdown">

                <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                  <i class="bi bi-chat-left-text"></i>
                  <span class="badge bg-success badge-number">2</span>
                </a>

                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                  <li class="dropdown-header">
                    You have 2 new messages
                    <a href="/allcontacts"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <li class="message-item">
                    <a href="/view-contact/1" style={{ textDecoration: "none" }}>
                      <img src={require('../img/girl.jpg')} alt="" class="rounded-circle" />
                      <div>
                        <h4>Huda Sarfaraz</h4>
                        <p>Error in file storage...</p>
                        <p>4 hrs. ago</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <li class="message-item">
                    <a href="/view-contact/2" style={{ textDecoration: "none" }}>
                      <img src={require('../img/boy.png')} alt="" class="rounded-circle" />
                      <div>
                        <h4>Muzi</h4>
                        <p>Very slow output response</p>
                        <p>6 hrs. ago</p>
                      </div>
                    </a>
                  </li>


                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <li class="dropdown-footer">
                    <a href="/allcontacts">Show all messages</a>
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
}

export default AppHeader;