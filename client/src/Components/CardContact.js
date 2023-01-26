import {Button, Card} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from '../Redux/Actions/AuthActions'

const CardContact=({el})=>{
    const dispatch = useDispatch()
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Img variant="top" src={el.pic}/>
          <Card.Title>{el.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{el.age}</Card.Subtitle>
          <Card.Text>
            {el.email}
          </Card.Text>
          {/* <Card.Link as={Link} to={`/editContact/${el._id}`}>Edit</Card.Link> */}
          {/* <Button onClick={()=>dispatch(deleteUser(el._id))} >Delete</Button> */}
          <div className='butt'>
          <Button variant="outline-info"><Link to={`/editContact/${el._id}`}>Edit</Link></Button>                   
          <Button variant="outline-danger"  onClick={()=>dispatch(deleteUser(el._id))} >Delete</Button>
          </div>
         
        </Card.Body>
      </Card>
    )
}

export default CardContact