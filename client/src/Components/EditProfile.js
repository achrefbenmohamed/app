import { useEffect, useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneUser, updateProfile, updateUser } from '../Redux/Actions/AuthActions'

const EditProfile=()=>{

  const {id} = useParams()

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneUser(id))
    },[])

    const oneUser = useSelector(state=>state.AuthReducer.oneUser)

   
    const [name,setName] = useState(oneUser.name)
    const [age,setAge] = useState(oneUser.age)
    const [email,setEmail] = useState(oneUser.email)
    const [pic,setPic] = useState(oneUser.pic)

    useEffect(()=>{
        setName(oneUser.name)
        setAge(oneUser.age)
        setEmail(oneUser.email)
        setPic(oneUser.pic)
    },[oneUser])
    const navigate = useNavigate()
    const handleEdit=(a)=>{
        a.preventDefault()
        dispatch(updateProfile({name,age,email,pic},id,navigate))
    }
    return(
        <div classname="forms">
             <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Enter age" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo</Form.Label>
        <Form.Control value={pic} onChange={(e)=>setPic(e.target.value)} type="email" placeholder="Enter email" />       
      </Form.Group>

      
      <Button onClick={(e)=>handleEdit(e)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    )
}

export default EditProfile