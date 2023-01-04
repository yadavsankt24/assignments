import React, { useState } from 'react'
import { reducer } from '../redux/reducer'
import { useSelector,useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom"
import * as types from "../redux/actionType"


export const Login = () => {
   const user =useSelector((store)=>store.data)
  const dispatch=useDispatch()
  const navigate=useNavigate()
    const [data,setData]=useState({
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
        // const obj={
        //     email:data.email,
        //     password:data.password,
        //   }


          user.map(person=>{
            if(person.email==data.email && person.password == data.password){
              if(person.role=="admin"){
                // console.log("give")
                navigate("/")
                return
              }else{
                console.log("data");
                alert("You are not allowed to login from here")
                return;
              }
            }else if(person.email!=data.email && person.password != data.password){
              alert("Fill correct information")
            }
          })
    }
    
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="email" name='email' onChange={handleOnchange} placeholder='email'/>
            <input type="password" name='password'  onChange={handleOnchange} placeholder='password'/>
            <input type="submit" value="submit" />
          </form>
        </div>
      )
}
