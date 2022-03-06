import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Components
import { EyeForm } from '../components/EyeForm/EyeForm'

// Services
import { getEyePhotoById } from '../services/eyeServices'

export const Create = () => {
    // Get params
    let { eye_photo_id } = useParams()

    // Eye stete
    const [eye, setEye] = useState(null)
    const [error, setError] = useState("")

    // Comments
    const [comments, setComments] = useState("")

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
            <div className='flex items-center justify-center h-screen w-full space-x-32'>
                <div className='flex flex-col space-y-4'>
                    {/* Image ID */}
                    {eye &&
                        <div className='bg-blue-400 p-2 rounded-lg'>
                            <div className='flex justify-center text-2xl font-bold text-back'>
                                {eye.eye_photo_id}
                            </div>
                        </div>
                    }
                    {/* Image show */}
                    {eye &&
                        <img
                            className='w-96 h-auto'
                            src={`http://localhost:3000/api/eye-photos/image/${eye.eye_photo_id}`}
                        />
                    }
                    {/* comments */}
                    <div>
                        <textarea onChange={(e) => setComments(e.target.value)} className='w-96 h-auto border border-black p-2' placeholder='Comments'></textarea>
                    </div>
                </div>
                <div>
                    <EyeForm
                        comments={comments}
                        eye_photo_id={eye_photo_id}
                    />
                </div>
            </div>
        </div>
    )
}
