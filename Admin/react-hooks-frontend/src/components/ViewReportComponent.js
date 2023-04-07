import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import ReportService from '../services/ReportService'



const ListReportComponent = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [module, setModule] = useState('')
    const [subject, setSubject] = useState('')
    const [problem, setProblem] = useState('')

    const { id } = useParams();


    useEffect(() => {

        ReportService.getReportById(id).then((response) => {
            setEmail(response.data.email)
            setName(response.data.name)
            setProblem(response.data.problem)
            setModule(response.data.module)
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
                    <h3 className="text-center">Report Details</h3>
                    <div className="card-body">



                        <div className="row">
                            <div>Reporter Name : {name}</div>
                        </div>

                        <div className="row">
                            <div> Reporter Email : {email}</div>
                        </div>
                        <br></br>

                        <div className="row">
                            <div>Module : {module}</div>
                        </div>
                        <div className="row">
                            <div>Subject: {subject}</div>
                        </div>

                        <div className="row">
                            <div>Problem: {problem}</div>
                        </div>

                        <Link to="/allreports" className="btn btn-danger" > Cancel </Link>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ListReportComponent
