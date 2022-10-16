import axios from 'axios';
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from '../reduxStore/Actions/action';
const UserListing = () => {
    const users = useSelector((state)=> state.allUsers.users);
    const dispatch = useDispatch();
    const fetchUsers = async () =>{
        const response = await axios
        .get("https://jsonplaceholder.typicode.com/users/")
        .catch((err)=>{
            console.log('err',err)
        })
        dispatch(setUsers(response.data));
    }
    useEffect(() => {
        fetchUsers();
    }, [])
    console.log("users",users);
  return (
    <div>
        
    </div>
  )
}

export default UserListing