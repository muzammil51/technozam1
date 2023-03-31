import React, {useState, useEffect} from 'react'
import { Link} from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap-icons/font/bootstrap-icons.css';


import UserService from '../services/UserService'
import ReportService from '../services/ReportService'


const ListUserComponent = () => {
      
    const [users, setUsers] = useState([])
    const [reports, setReports] = useState([])


    useEffect(() => {

        getAllUsers();
        getAllReports();
    }, [])

    const getAllUsers = () => {
        UserService.getAllUsers().then((response) => {
            setUsers(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteUser = (userId) => {
        UserService.deleteUser(userId).then((response) =>{
        getAllUsers();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    const getAllReports = () => {
      ReportService.getAllReports().then((response) => {
        setReports(response.data)
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      })
    }
  
    const deleteReport = (reportId) => {
      ReportService.deleteReport(reportId).then((response) => {
        getAllReports();
  
      }).catch(error => {
        console.log(error);
      })
  
    }

    return (

        <div>

<div class="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>
    {/* <!-- End Page Title --> */}

    <section class="section dashboard">
      <div class="row">

        {/* <!-- Left side columns --> */}
        <div class="col-lg-8">
          <div class="row">

            {/* <!-- Sales Card --> */}
            <div class="col-xxl-4 col-md-6">
              <div class="card info-card sales-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Sales <span>| Today</span></h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-cart"></i>
                    </div>
                    <div class="ps-3">
                      <h6>45</h6>
                      <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* <!-- End Sales Card --> */}

            {/* <!-- Revenue Card --> */}
            <div class="col-xxl-4 col-md-6">
              <div class="card info-card revenue-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Revenue <span>| This Month</span></h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-currency-dollar"></i>
                    </div>
                    <div class="ps-3">
                      <h6>$326</h6>
                      <span class="text-success small pt-1 fw-bold">8%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* <!-- End Revenue Card --> */}

            {/* <!-- Customers Card --> */}
            <div class="col-xxl-4 col-xl-12">

              <div class="card info-card customers-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Customers <span>| This Year</span></h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-people"></i>
                    </div>
                    <div class="ps-3">
                      <h6>4</h6>
                      <span class="text-danger small pt-1 fw-bold">2%</span> <span class="text-muted small pt-2 ps-1">decrease</span>

                    </div>
                  </div>

                </div>
              </div>

            </div>
            {/* <!-- End Customers Card --> */}

            {/* <!-- Reports --> */}
            <div class="col-12">
              <div class="card recent-sales overflow-auto">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Reports <span>/Today</span></h5>

                  {/* <!-- Line Chart --> */}
                  <div id="reportsChart"></div>
                  <table class="table table-border datatable">
                      <thead>
                        <tr>
                          <th scope="col">ID#</th>
                          <th scope="col">Module</th>
                          <th scope="col">Reporter Name</th>
                          <th scope="col">Reporter Email</th>
                          <th scope="col">Subject</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>

                      <tbody>
                        {
                          reports.map(
                            report =>
                              <tr key={report.id}>

                                <td> {report.id} </td>
                                <td>{report.module}</td>
                                <td> {report.name} </td>
                                <td> {report.email} </td>
                                <td>{report.subject}</td>
                                {/* <td>{report.providerId}</td> */}


                                <td>
                                  <Link style={{ color: "red" }} class="bi bi-trash" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Report" onClick={() => deleteReport(report.id)}>Delete</Link>
                                  <Link className="bi bi-info-circle-fill" data-bs-toggle="tooltip" data-bs-placement="top" title="View Report" to={`/view-report/${report.id}`} >View Problem</Link>

                                </td>
                              </tr>
                          )
                        }
                      </tbody>
                    </table>
                </div>

              </div>
            </div>
            {/* <!-- End Reports --> */}

            {/* <!-- Recent Sales --> */}
            <div class="col-12">
              <div class="card recent-sales overflow-auto">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Recent Users<span>| Today</span></h5>

                  <table class="table table-border datatable">
                    <thead>
                      <tr>
                        <th scope="col">ID#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Provider</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                    {
                        users.map(
                            user =>
                            <tr key = {user.id}> 

                                <td> {user.id} </td>
                                <td><img src={user.imageUrl} alt="new" style={{height:"30px", borderRadius:"30px"}}/><span>{user.name}</span></td>
                                <td> {user.email} </td>
                                <td>{user.provider}</td>
                                <td><span class="badge bg-success">Approved</span></td>

                                {/* <td>{user.providerId}</td> */}


                                <td>
                                <Link style={{color:"green"}} className="bi bi-pencil-square" data-bs-toggle="tooltip" data-bs-placement="top" title="Update User" to={`/edit-user/${user.id}`} >Update</Link>
                                <Link style={{color:"red"}} class="bi bi-trash" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete User" onClick = {() => deleteUser(user.id)}>Delete</Link>
                                <Link className="bi bi-info-circle-fill" data-bs-toggle="tooltip" data-bs-placement="top" title="View User" to={`/view-user/${user.id}`} >View</Link>

                                </td>
                            </tr>
                        )
                    }
                </tbody>
                  </table>

                </div>

              </div>
            </div>
            {/* <!-- End Recent Sales --> */}

            {/* <!-- Top Selling --> */}
            <div class="col-12">
              <div class="card top-selling overflow-auto">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body pb-0">
                  <h5 class="card-title">Top Selling <span>| Today</span></h5>

                  <table class="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Sold</th>
                        <th scope="col">Revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><a href="#" style={{textDecoration:"none"}} class="text-primary fw-bold">Short Question Generator</a></td>
                        <td>$10</td>
                        <td class="fw-bold">24</td>
                        <td>$240</td>
                      </tr>
                      <tr>
                        <td><a href="#" style={{textDecoration:"none"}} class="text-primary fw-bold">Multiple Choice Question Generator</a></td>
                        <td>$10</td>
                        <td class="fw-bold">9</td>
                        <td>$90</td>
                      </tr>
                      <tr>
                        <td><a href="#" style={{textDecoration:"none"}} class="text-primary fw-bold">Fill-in-Blanks Generator</a></td>
                        <td>$10</td>
                        <td class="fw-bold">7</td>
                        <td>$70</td>
                      </tr>
                      <tr>
                        <td><a href="#" style={{textDecoration:"none"}} class="text-primary fw-bold">True/False Generator</a></td>
                        <td>$10</td>
                        <td class="fw-bold">6</td>
                        <td>$6</td>
                      </tr>
                      <tr>
                        <td><a href="#" style={{textDecoration:"none"}} class="text-primary fw-bold">Matchings Generator</a></td>
                        <td>$10</td>
                        <td class="fw-bold">4</td>
                        <td>$4</td>
                      </tr>
                      <tr>
                        <td><a href="#" style={{textDecoration:"none"}} class="text-primary fw-bold">Notes Generator</a></td>
                        <td>$10</td>
                        <td class="fw-bold">4</td>
                        <td>$4</td>
                      </tr>
                    </tbody>
                  </table>

                </div>

              </div>
            </div>
            {/* <!-- End Top Selling --> */}

          </div>
        </div>
        {/* <!-- End Left side columns --> */}

        {/* <!-- Right side columns --> */}
        <div class="col-lg-4">

          {/* <!-- Recent Activity --> */}
          <div class="card">
            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>

            <div class="card-body">
              <h5 class="card-title">Recent Activity <span>| Today</span></h5>

              <div class="activity">

                <div class="activity-item d-flex">
                  <div class="activite-label">32 min</div>
                  <i class='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                  <div class="activity-content">
                    You uploaded Notes Generator
                  </div>
                </div>
                {/* <!-- End activity item--> */}

                <div class="activity-item d-flex">
                  <div class="activite-label">56 min</div>
                  <i class='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
                  <div class="activity-content">
                  You uploaded Matchings Generator
                  </div>
                </div>
                {/* <!-- End activity item--> */}

                <div class="activity-item d-flex">
                  <div class="activite-label">2 hrs</div>
                  <i class='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                  <div class="activity-content">
                  You uploaded True/False Generator
                  </div>
                </div>
                {/* <!-- End activity item--> */}

                <div class="activity-item d-flex">
                  <div class="activite-label">1 day</div>
                  <i class='bi bi-circle-fill activity-badge text-info align-self-start'></i>
                  <div class="activity-content">
                  You uploaded Fill-in-Blanks Generator
                  </div>
                </div>
                {/* <!-- End activity item--> */}

                <div class="activity-item d-flex">
                  <div class="activite-label">2 days</div>
                  <i class='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
                  <div class="activity-content">
                  You uploaded MCQs Generator
                  </div>
                </div>
                {/* <!-- End activity item--> */}

                <div class="activity-item d-flex">
                  <div class="activite-label">4 weeks</div>
                  <i class='bi bi-circle-fill activity-badge text-muted align-self-start'></i>
                  <div class="activity-content">
                  You uploaded Short Question Generator
                  </div>
                </div>
                {/* <!-- End activity item--> */}

              </div>

            </div>
          </div>
          {/* <!-- End Recent Activity --> */}


          <div class="card">

          {/* <!-- News & Updates Traffic --> */}
          <div class="card">
            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>

            <div class="card-body pb-0">
              <h5 class="card-title">News &amp; Updates <span>| Today</span></h5>

              {/* <div class="news">
                <div class="post-item clearfix">
                  <img src="assets/img/news-1.jpg" alt="" />
                  <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
                  <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                </div>

                <div class="post-item clearfix">
                  <img src="assets/img/news-2.jpg" alt="" />
                  <h4><a href="#">Quidem autem et impedit</a></h4>
                  <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
                </div>

                <div class="post-item clearfix">
                  <img src="assets/img/news-3.jpg" alt="" />
                  <h4><a href="#">Id quia et et ut maxime similique occaecati ut</a></h4>
                  <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
                </div>

                <div class="post-item clearfix">
                  <img src="assets/img/news-4.jpg" alt="" />
                  <h4><a href="#">Laborum corporis quo dara net para</a></h4>
                  <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
                </div>

                <div class="post-item clearfix">
                  <img src="assets/img/news-5.jpg" alt="" />
                  <h4><a href="#">Et dolores corrupti quae illo quod dolor</a></h4>
                  <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
                </div>

              </div> */}
              {/* <!-- End sidebar recent posts--> */}

            </div>
          </div>
          {/* <!-- End News & Updates --> */}

        </div>
        {/* <!-- End Right side columns --> */}

      </div>
      </div>
    </section>


  
            {/* <h2 className = "text-center">Users List </h2>
            <div className="row">
            <Link to = "/add-user" className = "btn btn-primary col-2" > Add Employee </Link>
            </div>
            <br></br>
            <div className="row">
                

        </div>

        <div>

    </div> */}
        </div>
    )
}

export default ListUserComponent
