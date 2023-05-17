import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';


import ContactService from '../services/ContactService'

const AllContactComponent = () => {

  const [contacts, setContacts] = useState([])


  useEffect(() => {

    getAllContacts();
  }, [])

  const getAllContacts = () => {
    ContactService.getAllContacts().then((response) => {
      setContacts(response.data)
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  const deleteContact = (contactId) => {
    ContactService.deleteContact(contactId).then((response) => {
      getAllContacts();

    }).catch(error => {
      console.log(error);
    })

  }



  return (

    <div>

      <div class="pagetitle">
        <h1>View Contacts</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="allcontacts">Contact</a></li>
            <li class="breadcrumb-item active">View Contacts</li>
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
                    <h5 class="card-title">All Contacts<span>| Today</span></h5>

                    <table class="table table-border datatable">
                      <thead>
                        <tr>
                          <th scope="col">ID#</th>
                          <th scope="col">Contacter Name</th>
                          <th scope="col">Contacter Email</th>
                          <th scope="col">Subject</th>
                          <th scope="col">Message</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>

                      <tbody>
                        {
                          contacts.map(
                            contact =>
                              <tr key={contact.id}>

                                <td> {contact.id} </td>
                                <td> {contact.name} </td>
                                <td> {contact.email} </td>
                                <td>{contact.subject}</td>
                                <td>{contact.message}</td>

                                <td>
                                  <Link style={{ color: "red" }} class="bi bi-trash" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Contact" onClick={() => deleteContact(contact.id)}>Delete</Link>
                                  <Link className="bi bi-info-circle-fill" data-bs-toggle="tooltip" data-bs-placement="top" title="View Contact" to={`/view-contact/${contact.id}`} >View</Link>

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



      {/* <h2 className = "text-center">Contacts List </h2>
            <div className="row">
            <Link to = "/add-contact" className = "btn btn-primary col-2" > Add Employee </Link>
            </div>
            <br></br>
            <div className="row">
                

        </div>

        <div>

    </div> */}
    </div>
  )
}


export default AllContactComponent
