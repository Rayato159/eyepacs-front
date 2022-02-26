import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem("accessToken")) {
            navigate('/')
        }
    }, [])

    return (
        <div>
            Home
        </div>
    )
}
