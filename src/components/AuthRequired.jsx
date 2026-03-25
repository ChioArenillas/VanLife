import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export default function AuthRequired() {
    const isLoggedIn = localStorage.getItem("loggedin")
    const location = useLocation()

    if(!isLoggedIn){
        return (<Navigate 
                    to="/login"
                    state={{
                        message: "You must log in firs", 
                        from: location.pathname
                    } }
                    replace
                />)
    }else{
        return <Outlet />
    }
}
