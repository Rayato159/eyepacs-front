import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// Components
import { EyeForm } from '../components/EyeForm/EyeForm'
import NavBar from '../components/Navbar/NavBar'
import { EyePhoto } from '../components/EyeForm/EyePhoto'

// Services
import { getEyePhotoById, getEyes } from '../services/eyeServices'

// Icons
import { AiOutlineLoading } from 'react-icons/ai'

export const Create = () => {

    const navigate = useNavigate()

    // Get params
    let { eye_photo_id } = useParams()

    // Eye stete
    const [eye, setEye] = useState(null)
    const [error, setError] = useState("")
    const [eyesMany, setEyesMany] = useState([])
    const [currentEyeIndex, setCurrentEyeIndex] = useState(null)

    const fetchEye = async (eye_photo_id) => {
        try {
            const res = await getEyePhotoById(eye_photo_id)
            setEye(res)
        } catch (e) {
            setError(e.message)
        }
    }

    const fetchEyesMany = async () => {
        try {
            const res = await getEyes(null, 'IN_PROGRESS', null, null)
            setEyesMany(res)
        } catch(e) {
            setError(e.message)
        }
    }

    const getCurrentEyeIndex = (eye_photo_id) => {
        setCurrentEyeIndex(eyesMany.findIndex((eye) => eye.eye_photo_id === eye_photo_id))
    }

    useEffect(() => {
        fetchEye(eye_photo_id)
    }, [])

    useEffect(() => {
        fetchEyesMany()
    }, [])

    useEffect(() => {
        getCurrentEyeIndex(eye_photo_id)
    }, [eyesMany])

    if(eye) {
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
                            onNextPage={() => window.location.href=`http://localhost:4181/home/create/${eyesMany[currentEyeIndex + 1].eye_photo_id}`}
                            onLastPage={() => window.location.href=`http://localhost:4181/home/create/${eyesMany[currentEyeIndex - 1].eye_photo_id}`}
                            eye_photo_id={eye_photo_id}
                        />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='h-screen w-full flex flex-col justify-center items-center'>
                <AiOutlineLoading className='h-10 w-10 animate-spin'/>
            </div>
        )
    }
}
