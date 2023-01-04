import React, { useState  } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import * as types from "../redux/actionType"
import {useNavigate} from "react-router-dom"


export const Admin = () => {
  const user =useSelector((store)=>store.data)
  const dispatch=useDispatch()
// console.log(user)
const navigate=useNavigate()
  const [data,setData]=useState({
    fname:"",
    lname:"",
    email:"",
    password:""
  })
  
  const handleOnchange=(e)=>{
      const value=e.target.value
      const name = e.target.name
      setData({...data,[name]:value})
    }
    
    const handleSubmit=(e)=>{
      e.preventDefault()
      const obj={
          fname:data.fname,
          lname:data.lname,
          email:data.email,
          password:data.password,
          role:"admin"
        }
        dispatch({type:types.POST_ADMIN_SUCCESS,payload:obj})
        console.log(data)
        navigate("/login")
  }
  
    return (
      <div style={{ margin:"auto",backgroundColor:"yellow",width:"40%",lineHeight:"20px",height:"220px" }}>
        <form style={{display:"grid",width:"40%",margin:"auto" ,gap:"10px"}} onSubmit={handleSubmit}>
          <input style={{width:"80%",height:"30px",gap:"10px"}} type="text" name='fname'  onChange={handleOnchange} placeholder='firstname' />
          <input style={{width:"80%",height:"30px",gap:"10px"}} type="text" name='lname' onChange={handleOnchange}  placeholder='lastname'/>
          <input style={{width:"80%",height:"30px",gap:"10px"}} type="email" name='email' onChange={handleOnchange} placeholder='email'/>
          <input style={{width:"80%",height:"30px",gap:"10px"}} type="password" name='password' onChange={handleOnchange} placeholder='password'/>
          <input style={{width:"80%",height:"30px",gap:"10px"}} type="submit" value="submit" />
        </form>
      </div>
    )
}
