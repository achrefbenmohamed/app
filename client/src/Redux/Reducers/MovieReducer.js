import { GET_MOVIES, GET_ONE_MOVIE } from "../TypeActions/MovieTypes"

const initialState ={
    movies : [],
    oneMovie : {}
}

const MovieReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_MOVIES : return {...state, movies : action.payload}
        case GET_ONE_MOVIE : return {...state, oneMovie : action.payload}
        default: return state
    }
}

export default MovieReducer