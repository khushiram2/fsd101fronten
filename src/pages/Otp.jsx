import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { API } from '../GlobalApi';
import { useNavigate, useParams } from 'react-router-dom';

const OTPInput = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
const {id}=useParams()
const navigate=useNavigate()
  const handleInputChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  if (index < otp.length - 1 && e.target.value !== '') {
    document.getElementById(`otp-input-${index + 1}`).focus();
  }
};

const handleSubmit=async()=>{
try {
  const OTP=otp.join("")
  const res=await axios.post(`${API}/auth/register`,{userId:id,OTP:OTP})
  if(res.status===200){
      navigate(`/${id}/home`)
  }else{
    alert("Otp didn't match")
    setOtp(['', '', '', '', '', ''])
  }
} catch (error) {
    console.log(error)
}
}


  return (
    <div className='container otpp'>
      <h2>Enter OTP</h2>
      <div className="otp-container">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            onChange={(e) => handleInputChange(e, index)}
            maxLength="1"
            id={`otp-input-${index}`}
            tabIndex={index + 1}
          />
        ))}
      </div>
      <Button onClick={handleSubmit} >Submit</Button>
    </div>
  );
};

export default OTPInput;
