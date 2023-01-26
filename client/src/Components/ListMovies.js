import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getMovies } from '../Redux/Actions/MovieActions'
import CardMovie from './CardMovie'
const ListMovies=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getMovies())
    },[])
    const movies = useSelector(state=> state.MovieReducer.movies)
    return(
        <div  className='divP'>
            {
                movies.map(el=> <CardMovie el={el}/>)
            }
        </div>
    )
}

export default ListMovies