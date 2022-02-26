import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Services
import { getEyes } from '../services/eyeServices'

export const Home = () => {

    const navigate = useNavigate()

    // Eye state
    const [name, setName] = useState("")
    const [eyes, setEyes] = useState([])
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState("")

    const fetchEyes = async (name) => {
        setIsPending(true)
        try {
            const res = await getEyes(name)
            setEyes(res)
            setIsPending(false)
        } catch(e) {
            setError(e.message)
            setIsPending(false)
        }
    }

    useEffect(() => {
        fetchEyes(name)
    }, [])

    console.log(eyes)

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
