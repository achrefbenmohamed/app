import { useEffect } from "react"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { deleteMovie, getOneMovie } from "../Redux/Actions/MovieActions"
import Rating from '@mui/material/Rating';


const DescMovie=()=>{
    const  {id} = useParams()

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneMovie(id))
    },[])
    
    const navigate = useNavigate()
    const oneMovie = useSelector(state=> state.MovieReducer.oneMovie)
    const token = localStorage.getItem('token')
    const user = useSelector(state => state.AuthReducer.user)
    
    return(
        <div className="rami" >
            <div className="rami" style={{width:"70%"}}>
            <h2>{oneMovie.title}</h2>
            <h4>{oneMovie.description}</h4>
        

          
            <iframe width="1036" height="558" src="https://www.youtube.com/embed/QQjLp1uvQb8" title="JUNG_E | Official Teaser | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            <Rating name="read-only" value={oneMovie.rating} readOnly />
            </div>
            {
                (token && user.role =="admin" ) &&
                <>
                   <Button variant="outline-info"><Link to={`/editMovie/${id}`}>Edit</Link></Button>                   
                   <Button variant="outline-danger" onClick={()=>dispatch(deleteMovie(oneMovie._id,navigate))}>Delete</Button>
                   
                </>
            }
         
        </div>
    )
}

export default DescMovie