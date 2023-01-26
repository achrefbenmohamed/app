import { useEffect } from "react"
import { current, deleteProfile } from "../Redux/Actions/AuthActions"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import {Button, Card} from 'react-bootstrap'
const Profil=()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(current())
    },[])

    const user = useSelector(state=> state.AuthReducer.user)
    const navigate = useNavigate()
    return(
        <div className="divP">
           
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Img variant="top" src={user.pic}/>
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{user.age}</Card.Subtitle>
                <Card.Text>
                    {user.email}
                </Card.Text>
                <div className='butt'>
                   <Button variant="outline-info"><Link to={`/editProfile/${user._id}`}>Edit</Link></Button>                   
                   <Button variant="outline-danger"  onClick={()=>{dispatch(deleteProfile(user._id,navigate))}}>Delete</Button>
                   </div>
                </Card.Body>
            </Card>
   
        </div>
    )
}

export default Profil