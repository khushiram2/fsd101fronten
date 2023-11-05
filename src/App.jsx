import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Loginfrm } from './pages/loginfrm'
import { Registrationform } from './pages/Registrationform'
import { Home } from './pages/Home'
import { Private } from './PrivateRoute/Private'
import OTPInput from './pages/Otp'

function App() {

  return (
  
    <Routes>
    <Route exact path='/' element={<Navigate replace to="/login" />} />
      <Route path='/login' element={<Loginfrm/>} />
      <Route path='/register' element={<Registrationform/>} />
      <Route path='/:id' element={<Private/>} >
      <Route path='/:id/home' element={<Home/>} />
      <Route path='/:id/otp' element={<OTPInput/>}/>
      </Route>
    </Routes>
  )
}

export default App
