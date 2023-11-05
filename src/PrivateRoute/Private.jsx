import React, { useEffect, useState } from 'react'
//import { AxiosInstance } from '../axiosInstance/AxiosInstance'
import { API } from '../GlobalApi'
import { Navigate, Outlet, useParams } from 'react-router-dom'
import axios from 'axios'

export const Private = () => {
    const {id}=useParams()
    const [ok, setok] = useState(null)
    useEffect(() => {
        const check = async () => {
            const { data } = await axios.get(API + `/auth/${id}/check`)
            if (data === "ok") {
                setok(true) 
            } else{
                setok(false)
            }

        }
        check()

    }, [])
    if (ok === null) {
       
        return <h1 >Loading...</h1>;
      } else if (ok) {
      
        return <Outlet />;
      } else {
       
        return <Navigate to="/login" />;
      }
}
