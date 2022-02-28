import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// Components
import { EyeForm } from '../components/EyeForm/EyeForm'

// Services
import { getEyePhotoById } from '../services/eyeServices'

export const Update = () => {
    // Get params
    let { eye_photo_id } = useParams()

    // Eye stete
    const [eye, setEye] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState("")

    const fetchEye = async (eye_photo_id) => {
        try {
            const res = await getEyePhotoById(eye_photo_id)
            setEye(res)
        } catch(e) {
            setError(e.message)
        }
    }

    useEffect(() => {
        fetchEye(eye_photo_id)
    }, [])

    return (
        <div className='flex items-center justify-between px-10 h-screen w-full'>
            <div>
                {eye &&
                    // Img here
                    <div></div>
                }
            </div>
            <div className='w-full'>
                <EyeForm/>
            </div>
        </div>
    )
}
