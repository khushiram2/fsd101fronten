import React, { useState } from 'react'
import {Container,Form,Button} from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'
import "../App.css"
import axios from 'axios'
import { API } from '../GlobalApi'
export const Registrationform = () => {
    const navigate=useNavigate()
    const [userData, setUserData] = useState({
        name:"",
        email:"",
        password:""
    })

    const handleChange=(e)=>{
setUserData({
    ...userData,
    [e.target.name]:e.target.value
})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const res=await axios.post(`${API}/auth/preregister`,{userData:userData})
            if(res.status===200){
                navigate(`/${res.data.id}/otp`)
            }else if(res.status===206){
                navigate("/login")
            }
            setUserData({name:"",email:"",password:""})
        } catch (error) {
            setUserData({name:"",email:"",password:""})
        }
   
      }
  return (
    
    <Container  >
        <h1>Registration Form</h1>
        <Form onSubmit={handleSubmit} >
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' name='name' value={userData.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='text' name='email' value={userData.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='text' name='password' value={userData.password} onChange={handleChange} required />
            </Form.Group>
        <Button type='submit' >Register</Button>
        </Form>
        <div className='d-flex' >
        <p>already have an account</p> &nbsp; <Link to="/login" >login</Link>
        </div>
    </Container>

  )
}
