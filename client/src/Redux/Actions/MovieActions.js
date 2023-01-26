import axios from "axios"
import { GET_MOVIES, GET_ONE_MOVIE } from "../TypeActions/MovieTypes"

export const getMovies=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/movie/readMovies')
        dispatch({
            type : GET_MOVIES,
            payload : res.data.movies
        })

    } catch (error) {
        console.log(error)
    }
}


export const addMovie=(newMovie,navigate)=>async(dispatch)=>{
    console.log(newMovie)
    try {
        await axios.post('/api/movie/addMovie',newMovie)
        dispatch(getMovies())
        navigate('/listMovies')
    } catch (error) {
        console.log(error)
    }
}

export const deleteMovie=(id,navigate)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/movie/deleteMovie/${id}`)
        dispatch(getMovies())
        navigate('/listMovies')
    } catch (error) {
        console.log(error)
    }
}

export const getOneMovie=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/movie/readMovie/${id}`)
        dispatch({
            type : GET_ONE_MOVIE,
            payload : res.data.found
        })
    } catch (error) {
        console.log(error)
    }
}


export const updateMovie=(upMovie,id,navigate)=>async(dispatch)=>{
    try {
       await axios.put(`/api/movie/updataMovie/${id}`,upMovie)
       dispatch(getMovies())
       navigate('/listMovies')

    } catch (error) {
        console.log(error)
    }
}