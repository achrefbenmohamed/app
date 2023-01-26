import { CURRENT, FAIL, GET_ONE_USER, GET_USERS, LOGIN, LOGOUT, REGISTER } from "../TypeActions/AuthType"
import axios from "axios"
import { alertError } from "./ErrorActions"

export const register=(user,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/auth/SignUp',user)
        
        dispatch({
            type : REGISTER,
            payload : res.data
        })

        navigate("/profil")

    } catch (error) {
  
        error.response.data.errors.forEach(element => {
            dispatch(alertError(element.msg))
        });
    }
}

export const login=(userl,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/auth/SignIn',userl)

        dispatch({
            type : LOGIN,
            payload : res.data
        })

        navigate("/profil")
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(alertError(element.msg))
        });
    }
}

export const current=()=>async(dispatch)=>{
    const config={
        headers:{
            Authorized : localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get('/api/auth/currentUser',config)

        dispatch({
            type : CURRENT,
            payload : res.data
        })
    } catch (error) {
        dispatch({
            type : FAIL,
            payload : error.response.data
        })
    }
}

export const logout=()=>{
    return(
        {
            type : LOGOUT
        }
    )
}

export const getUsers=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/auth/readUsers')
        dispatch({
            type : GET_USERS,
            payload : res.data.users
        })

    } catch (error) {
        console.log(error)
    }
}

export const deleteUser=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/auth/deleteUser/${id}`)
        dispatch(getUsers())
    } catch (error) {
        console.log(error)
    }
}

export const deleteProfile=(id,navigate)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/auth/deleteUser/${id}`)
        navigate("/")
        dispatch(logout())
    } catch (error) {
        console.log(error)
    }
}
export const getOneUser=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/auth/readUser/${id}`)
        dispatch({
            type : GET_ONE_USER,
            payload : res.data.found
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateUser=(upUser,id,navigate)=>async(dispatch)=>{
    try {
       await axios.put(`/api/auth/updataUser/${id}`,upUser)
       dispatch(getUsers())
       navigate('/listUsers')

    } catch (error) {
        console.log(error)
    }
}

export const updateProfile=(upUser,id,navigate)=>async(dispatch)=>{
    try {
       await axios.put(`/api/auth/updataUser/${id}`,upUser)
       dispatch(current())
       navigate('/profil')

    } catch (error) {
        console.log(error)
    }
}