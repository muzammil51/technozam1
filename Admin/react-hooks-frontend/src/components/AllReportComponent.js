import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';


import ReportService from '../services/ReportService'

const AllReportComponent = () => {

  const [reports, setReports] = useState([])


  useEffect(() => {

    getAllReports();
  }, [])

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
        <h1>View Reports</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="allreports">Report</a></li>
            <li class="breadcrumb-item active">View Reports</li>
          </ol>
        </nav>
      </div>
      {/* <!-- End Page Title --> */}

      <section class="section dashboard">
        <div class="row">

          {/* <!-- Left side columns --> */}
          <div>
            <div class="row">

              {/* <!-- End Customers Card --> */}


              {/* <!-- Recent Sales --> */}
              <div>
                <div class="card recent-sales overflow-auto">

                  <div class="card-body">
                    <h5 class="card-title">All Reports<span>| Today</span></h5>

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
                                  <Link className="bi bi-info-circle-fill" data-bs-toggle="tooltip" data-bs-placement="top" title="View Report" to={`/view-report/${report.id}`} >View</Link>

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

            </div>
          </div>
          {/* <!-- End Left side columns --> */}



        </div>
      </section>



      {/* <h2 className = "text-center">Reports List </h2>
            <div className="row">
            <Link to = "/add-report" className = "btn btn-primary col-2" > Add Employee </Link>
            </div>
            <br></br>
            <div className="row">
                

        </div>

        <div>

    </div> */}
    </div>
  )
}


export default AllReportComponent
