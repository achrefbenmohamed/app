import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneMovie, updateMovie } from "../Redux/Actions/MovieActions"
import Rating from '@mui/material/Rating'
import { Form,Button } from "react-bootstrap"
import { useEffect, useState } from "react"
const EditMovie=()=>{

    const {id} = useParams()

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneMovie(id))
    },[])

    const oneMovie = useSelector(state=> state.MovieReducer.oneMovie)

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState(0)
    const [posterURL,setPosterURL] = useState('')
    const [rating,setRating] = useState('')
    const [trailer,setTrailer] = useState('')

    useEffect(()=>{
        setTitle(oneMovie.title)
        setDescription(oneMovie.description)
        setPosterURL(oneMovie.posterURL)
        setRating(oneMovie.rating)
        setTrailer(oneMovie.trailer)
    },[oneMovie])
    const navigate = useNavigate()
    const handleEdit=(a)=>{
        a.preventDefault()
        dispatch(updateMovie({title,description,posterURL,rating,trailer},id,navigate))
    }

    return(
        <div classname="forms">
              <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter title" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter Description" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo</Form.Label>
        <Form.Control value={posterURL} onChange={(e)=>setPosterURL(e.target.value)} type="email" placeholder="Enter posterURL" />       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rating</Form.Label>
        <br/>
        <Rating value={rating}
        name="simple-controlled"
        onChange={(e)=>setRating(e.target.value)}
      />
        {/* <Form.Control value={title} onChange={(e)=>setRating(e.target.value)} type="email" placeholder="Enter rating" />        */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Trailer</Form.Label>
        <Form.Control value={trailer} onChange={(e)=>setTrailer(e.target.value)} type="email" placeholder="Enter trailer" />       
      </Form.Group>

      
      <Button onClick={(e)=>handleEdit(e)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    )
}

export default EditMovie