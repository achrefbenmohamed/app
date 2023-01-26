import {Card} from 'react-bootstrap'
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
const CardMovie=({el})=>{
    return(
    
        <Card style={{ width: '18rem', margin: '30px' }}>
          <Link to={`/descMovie/${el._id}`}><Card.Img variant="top" src={el.posterURL} /></Link>
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>
            {el.description}
          </Card.Text>
          <Rating name="read-only" value={el.rating} readOnly />
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    )
}
export default CardMovie