import { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { addMovie } from '../Redux/Actions/MovieActions'
import Rating from '@mui/material/Rating'
const AddMovie=()=>{
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState(0)
    const [posterURL,setPosterURL] = useState('')
    const [rating,setRating] = useState('')
    const [trailer,setTrailer] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleAdd=(a)=>{
        a.preventDefault()
        dispatch(addMovie({title,description,posterURL,rating,trailer},navigate))
    }
    return(
        // <div classname="forms">
          <div  className='divF'>
              <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter title" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter Description" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo</Form.Label>
        <Form.Control onChange={(e)=>setPosterURL(e.target.value)} type="email" placeholder="Enter posterURL" />       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rating</Form.Label>
        <br/>
        <Rating
        name="simple-controlled"
        onChange={(e)=>setRating(e.target.value)}
      />
        {/* <Form.Control onChange={(e)=>setRating(e.target.value)} type="email" placeholder="Enter rating" />        */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Trailer</Form.Label>
        <Form.Control onChange={(e)=>setTrailer(e.target.value)} type="email" placeholder="Enter trailer" />       
      </Form.Group>

      
      <Button onClick={(e)=>handleAdd(e)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    )
}

export default AddMovie