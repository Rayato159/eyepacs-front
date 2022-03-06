import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Icons
import { BiErrorCircle } from 'react-icons/bi'

// Services
import { uploadEyePhotos } from '../services/eyeServices'

// Components
import { DropZone } from '../components/DropZone/DropZone'

import NavBar from '../components/Navbar/NavBar';

export const UploadImg = () => {

    const navigate = useNavigate()

    // Images state
    const [images, setImages] = useState([])
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState("")
    const [isComplete, setIsComplete] = useState(false)

    const onUploadSubmit = async () => {
        setIsPending(true)
        try {
            const res = await uploadEyePhotos(images)
            setIsPending(false)
            setIsComplete(true)
        } catch (e) {
            setError(e.message)
            setIsPending(false)
        }
    }

    useEffect(() => {
        if (isComplete) {
            navigate('/home')
        }
    }, [isComplete])

    return (
        <div>
            <NavBar />
            <div className='max-w-3xl mx-auto h-screen'>
                <div className='flex flex-col justify-center h-screen'>
                    <div className='flex flex-col space-y-6 bg-emerald-300 p-10 rounded-xl shadow-md'>



                        <div className='text-3xl font-bold text-black'>
                            Upload Eyes Images
                        </div>
                        <div>
                            <DropZone props={(files) => setImages(files)} msg={`Upload Images`} />
                        </div>
                        <div className='flex justify-end'>
                            <button onClick={onUploadSubmit} className='font-semibold text-xl text-black px-4 py-1 bg-white w-48 rounded-md shadow-md'>
                                {isPending ? 'Loading...' : 'Upload'}
                            </button>
                        </div>
                        {error &&
                            <div className='flex space-x-2 items-center'>
                                <div>
                                    <BiErrorCircle className='text-red-500 h-5 w-5' />
                                </div>
                                <div className='text-red-500 text-md'>
                                    {error}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
