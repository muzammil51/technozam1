import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import ContactService from '../services/ContactService'



const ListContactComponent = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const { id } = useParams();


    useEffect(() => {

        ContactService.getContactById(id).then((response) => {
            setEmail(response.data.email)
            setName(response.data.name)
            setMessage(response.data.message)
            setSubject(response.data.subject)


        }).catch(error => {
            console.log(error)
        })
    }, [])


    return (
        <div>
            <br /><br />
            <div className="container">
                <br></br>


                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Contact Details</h3>
                    <div className="card-body">



                        <div className="row">
                            <div>Contacter Name : {name}</div>
                        </div>

                        <div className="row">
                            <div> Contacter Email : {email}</div>
                        </div>
                        <br></br>

                        <div className="row">
                            <div>Subject: {subject}</div>
                        </div>

                        <div className="row">
                            <div>Message: {message}</div>
                        </div>

                        <Link to="/allcontacts" className="btn btn-danger" > Cancel </Link>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ListContactComponent
