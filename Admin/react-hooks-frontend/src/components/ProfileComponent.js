import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap-icons/font/bootstrap-icons.css';




import UserService from '../services/UserService'

const ProfileComponent = () => {

    const [users, setUsers] = useState([])


    useEffect(() => {

        getAllUsers();
    }, [])

    const getAllUsers = () => {
        UserService.getAllUsers().then((response) => {
            setUsers(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteUser = (userId) => {
        UserService.deleteUser(userId).then((response) => {
            getAllUsers();

        }).catch(error => {
            console.log(error);
        })

    }

    return (

        <div>


            <div class="pagetitle">
                <h1>Profile</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active">Profile</li>
                    </ol>
                </nav>
            </div>
            {/* <!-- End Page Title --> */}

            <section class="section profile">
                <div class="row">
                    <div class="col-xl-4">

                        <div class="card">
                            <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">

                                <img src={require('../img/boy.png')} alt="Profile" class="rounded-circle" />
                                    <h2>Admin</h2>
                                    <h3>Q-Tech</h3>
                                    <div class="social-links mt-2">
                                        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                                        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                                        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                                        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                                    </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-xl-8">

                        <div class="card">
                            <div class="card-body pt-3">
                                {/* <!-- Bordered Tabs --> */}
                                <ul class="nav nav-tabs nav-tabs-bordered">

                                    <li class="nav-item">
                                        <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                                    </li>

                                    <li class="nav-item">
                                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings">Settings</button>
                                    </li>

                                    <li class="nav-item">
                                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                                    </li>

                                </ul>
                                <div class="tab-content pt-2">

                                    <div class="tab-pane fade show active profile-overview" id="profile-overview">
                                        <h5 class="card-title">About</h5>
                                        <p class="small fst-italic">We are team called <b><i>"Prime Art"</i></b> making impossible possible by using AI. Systems that think and make teaching interesting and less time taking. Smart technology for a better future. </p>

                                        <h5 class="card-title">Profile Details</h5>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label ">Full Name</div>
                                            <div class="col-lg-9 col-md-8">Muzammil Ahmad</div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Company</div>
                                            <div class="col-lg-9 col-md-8">Q-Tech</div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Job</div>
                                            <div class="col-lg-9 col-md-8">Website Management</div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Country</div>
                                            <div class="col-lg-9 col-md-8">Pakistan</div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Address</div>
                                            <div class="col-lg-9 col-md-8">Beaconhouse National University, Lahore</div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Phone</div>
                                            <div class="col-lg-9 col-md-8">(+92) 486-3538</div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Email</div>
                                            <div class="col-lg-9 col-md-8">q-tech@gmail.com</div>
                                        </div>

                                    </div>

                                    <div class="tab-pane fade pt-3" id="profile-settings">

                                        {/* <!-- Settings Form --> */}
                                        <form>

                                            <div class="row mb-3">
                                                <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Email Notifications</label>
                                                <div class="col-md-8 col-lg-9">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="changesMade" checked />
                                                        <label class="form-check-label" for="changesMade">
                                                            Changes made to your account
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="newProducts" checked />
                                                        <label class="form-check-label" for="newProducts">
                                                            Information on new products and services
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="proOffers" />
                                                        <label class="form-check-label" for="proOffers">
                                                            Marketing and promo offers
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="securityNotify" checked disabled />
                                                        <label class="form-check-label" for="securityNotify">
                                                            Security alerts
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="text-center">
                                                <button type="submit" class="btn btn-primary">Save Changes</button>
                                            </div>
                                        </form>
                                        {/* <!-- End settings Form --> */}

                                    </div>

                                    <div class="tab-pane fade pt-3" id="profile-change-password">
                                        {/* <!-- Change Password Form --> */}
                                        <form>

                                            <div class="row mb-3">
                                                <label for="currentPassword" class="col-md-4 col-lg-3 col-form-label">Current Password</label>
                                                <div class="col-md-8 col-lg-9">
                                                    <input name="password" type="password" class="form-control" id="currentPassword" />
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="newPassword" class="col-md-4 col-lg-3 col-form-label">New Password</label>
                                                <div class="col-md-8 col-lg-9">
                                                    <input name="newpassword" type="password" class="form-control" id="newPassword" />
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="renewPassword" class="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                                                <div class="col-md-8 col-lg-9">
                                                    <input name="renewpassword" type="password" class="form-control" id="renewPassword" />
                                                </div>
                                            </div>

                                            <div class="text-center">
                                                <button type="submit" class="btn btn-primary">Change Password</button>
                                            </div>
                                        </form>
                                        {/* <!-- End Change Password Form --> */}

                                    </div>

                                </div>
                                {/* <!-- End Bordered Tabs --> */}

                            </div>
                        </div>

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

export default ProfileComponent
