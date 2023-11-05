import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../GlobalApi";

export const Loginfrm = () => {
  const navigate=useNavigate()
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit =async (e) => {
    e.preventDefault();
      try {
        const res=await axios.post(`${API}/auth/login`,userData)
        if(res.status===200){
          navigate(`/${res.data.id}/home`)
        }else if(res.status===206){
            navigate(`/${res.data.id}/otp`)
        }else{
          alert("some error occured please try again")
        }
      } catch (error) {
        console.log("some error occured")
      }
    setUserData({ email: "", password: "" });
  };
  return (
    <Container>
      <h1>Login Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
      <div className="d-flex">
        <p>Don't have an account</p> &nbsp; <Link to="/register">register</Link>
      </div>
    </Container>
  );
};
