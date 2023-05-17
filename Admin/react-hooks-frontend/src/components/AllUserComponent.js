import React, {useState, useEffect} from 'react'
import { Link} from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap-icons/font/bootstrap-icons.css';


import UserService from '../services/UserService'

const AllUserComponent = () => {
      
    const [users, setUsers] = useState([])
    const [countUser, setUserCount] = useState([])

    useEffect(() => {

        getAllUsers();
    }, [])

    const getAllUsers = () => {
        UserService.getAllUsers().then((response) => {
            setUsers(response.data)
            console.log(response.data);
            setUserCount(response.data.length);

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



    return (

        <div>

<div class="pagetitle">
      <h1>View Users</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="allusers">User</a></li>
          <li class="breadcrumb-item active">View Users</li>
        </ol>
      </nav>
    </div>
    {/* <!-- End Page Title --> */}

    <section class="section dashboard">
      <div class="row">

        {/* <!-- Left side columns --> */}
        <div>
          <div class="row">

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
                      <h6>{countUser}</h6>
                      <span class="text-danger small pt-1 fw-bold">2%</span> <span class="text-muted small pt-2 ps-1">decrease</span>

                    </div>
                  </div>

                </div>
              </div>

            </div>
            {/* <!-- End Customers Card --> */}


            {/* <!-- Recent Sales --> */}
            <div>
              <div class="card recent-sales overflow-auto">

                <div class="card-body">
                  <h5 class="card-title">All Users<span>| Today</span></h5>

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

          </div>
        </div>
        {/* <!-- End Left side columns --> */}

       

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


export default AllUserComponent
