import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getUsers } from '../Redux/Actions/AuthActions'
import CardContact from './CardContact'
const ListContact=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUsers())
    },[])

    const users = useSelector(state => state.AuthReducer.users)
    return(
        <div className='divP'>
            {users&&
                users.map(el => <CardContact key={el._id} el={el}/>)
            }
        </div>
    )
}

export default ListContact