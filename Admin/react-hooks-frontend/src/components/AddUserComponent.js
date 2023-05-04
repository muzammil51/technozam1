import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import UserService from '../services/UserService'

const AddUserComponent = () => {

    const [email, setEmail] = useState('')
    const [email_verified, setEmailVerified] = useState('')


    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const [imageUrl, setImageUrl] = useState('')
    const [provider, setProvider] = useState('local')
    const [providerId, setProviderId] = useState('')

    const history = useHistory();
    const { id } = useParams();

    const saveOrUpdateUser = (e) => {
        e.preventDefault();

        const user = { id, email, email_verified, name, password, imageUrl, provider, providerId }

        if (id) {
            UserService.updateUser(id, user).then((response) => {
                history.push('/users')
                alert("User Updated")
            }).catch(error => {
                console.log(error)
            })

        } else {
            UserService.createUser(user).then((response) => {
                console.log(response.data)
                history.push('/users');
                alert("User Added")


            }).catch(error => {
                console.log(error)
            })
        }

    }

    useEffect(() => {

        UserService.getUserById(id).then((response) => {

            setEmail(response.data.email)
            setName(response.data.name)
            setPassword(response.data.password)
            setImageUrl(response.data.imageUrl)
            setProvider("local")
            setProviderId(response.data.providerId)

        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if (id) {
            return <h2 className="text-center">Update User</h2>
        } else {
            return <h2 className="text-center">Add User</h2>
        }
    }

    return (
        <div>
            <div class="pagetitle">
                <h1>Add New User</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/allusers">User</a></li>
                        <li class="breadcrumb-item active">Add User</li>
                    </ol>
                </nav>
            </div>

            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form>

                                <div className="form-group">
                                    <label className="form-label"> Email :</label>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>

                                </div>

                                <div className="form-group">
                                    <label className="form-label"> Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        name="name"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <div className="form-group">
                                    <label className="form-label"> Password :</label>
                                    <input
                                        type="text"
                                        placeholder="Password"
                                        name="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group">
                                    <label className="form-label"> Provider :</label>
                                    <input
                                        type="text"
                                        placeholder="Provider"
                                        name="provider"
                                        className="form-control"
                                        value="local"
                                        onChange={(e) => setProvider("local")}
                                        disabled
                                    >
                                    </input>

                                </div>

                                {/* <div className = "form-group mb-2">
                                    <label className = "form-label"> Image :</label>
                                    <input
                                        type = "file"
                                        placeholder = "Image"
                                        name = "imageurl"
                                        className = "form-control"
                                        value = {imageUrl}
                                        onChange = {(e) => setImageUrl(e.target.value)}
                                    >
                                    </input>
                                </div> */}
                                <br></br>
                                <button className="btn btn-success" onClick={(e) => saveOrUpdateUser(e)} style={{ marginRight: "10px" }}>Add User</button>
                                <Link to="/users" className="btn btn-danger" > Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AddUserComponent
