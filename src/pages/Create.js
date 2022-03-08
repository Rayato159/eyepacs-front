import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Components
import { EyeForm } from '../components/EyeForm/EyeForm'
import NavBar from '../components/Navbar/NavBar'
import { EyePhoto } from '../components/EyeForm/EyePhoto'

// Services
import { getEyePhotoById } from '../services/eyeServices'

export const Create = () => {
    // Get params
    let { eye_photo_id } = useParams()

    // Eye stete
    const [eye, setEye] = useState(null)
    const [error, setError] = useState("")

    const fetchEye = async (eye_photo_id) => {
        try {
            const res = await getEyePhotoById(eye_photo_id)
            setEye(res)
        } catch (e) {
            setError(e.message)
        }
    }

    useEffect(() => {
        fetchEye(eye_photo_id)
    }, [])

    return (

        <div className='aspect-video'>
            <div>
                <NavBar />
            </div>
            <div className='flex items-center justify-center h-screen w-full space-x-32'>
                <div className='flex flex-col space-y-4'>
                    {/* Image show */}
                    {eye &&
                        <EyePhoto props={`http://localhost:3000/api/eye-photos/image/${eye.eye_photo_id}`}/>
                    }
                </div>
                <div>
                    <EyeForm
                        eye_photo_id={eye_photo_id}
                    />
                </div>
            </div>
        </div>
    )
}
