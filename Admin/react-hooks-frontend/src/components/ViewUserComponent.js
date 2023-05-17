import React, {useState, useEffect} from 'react'
import { Link, useHistory,useParams } from 'react-router-dom'

import UserService from '../services/UserService'



const ListUserComponent = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [provider, setProvider] = useState('')

    const [users, setUsers] = useState([])
    const history = useHistory();
    const {id} = useParams();


    useEffect(() => {

        UserService.getUserById(id).then((response) =>{
            setEmail(response.data.email)
            setName(response.data.name)
            setImageUrl(response.data.imageUrl)
            setProvider(response.data.provider)

        }).catch(error => {
            console.log(error)
        })
    }, [])


    return (
        <div>
        <br /><br />
        <div className = "container">
        <br></br>

        
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">User Details</h3>
                    <div className = "card-body">
            
                                <div className = "row">
                                  <div> User Name : {name}</div> 
                                </div>

<br></br>
                                <div className = "row">
                            <div> User Email : { email }</div>
                        </div>

<br></br>
                        <div className = "row">
                            <div>User Image: <img src={imageUrl} alt="new" style={{height:"60px", borderRadius:"30px"}}/></div>
                        </div>

                        <div className = "row">
                            <div>Account Provider: { provider }</div>
                        </div>
                        
                        <Link to="/allusers" className="btn btn-danger" > Cancel </Link>

                        </div>
                    </div>
                </div>
</div>
    
    )
}

export default ListUserComponent
