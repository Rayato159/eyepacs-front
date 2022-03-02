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

    // Eye side state
    const [left, setLeft] = useState(false)
    const [right, setRight] = useState(false)

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
        <div className='flex items-center justify-center h-screen w-full space-x-32'>
            <div className='flex flex-col space-y-4'>
                {/* Image show */}
                {eye &&
                    <img
                        className='w-96 h-auto'
                        src={`http://localhost:3000/api/eye-photos/image/${eye.eye_photo_id}`} 
                    />
                }
                {/* Form */}
                <div className='w-96'>
                    <table className='table-auto w-96'>
                        <thead>
                            <tr className="border-collapse border border-slate-400">
                                <td className="p-2 bg-trustworthy-400 text-center font-bold">Left</td>
                                <td className="p-2 bg-trustworthy-400 text-center font-bold">Right</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-300 p-2 text-center"><input disabled={right} onChange={() => setLeft(!left)} className='h-5 w-5' type="checkbox" /></td>
                                <td className="border border-slate-300 p-2 text-center"><input disabled={left} onChange={() => setRight(!right)} className='h-5 w-5' type="checkbox" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <EyeForm 
                    left={left}
                    eye_photo_id={eye_photo_id}
                />
            </div>
        </div>
    )
}
