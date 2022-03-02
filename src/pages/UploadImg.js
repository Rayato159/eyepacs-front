import React, { useState, useEffect } from 'react'

// Services
import { uploadEyePhotos } from '../services/eyeServices'

// Components
import { DropZone } from '../components/DropZone/DropZone'

export const UploadImg = () => {

    const [images, setImages] = useState([])
    console.log(images)

    return (
        <div className='max-w-3xl mx-auto h-screen'>
            <div className='flex flex-col justify-center h-screen'>
                <div className='flex flex-col space-y-6 bg-emerald-300 p-10 rounded-xl shadow-md'>
                    <div className='text-3xl font-bold text-black'>
                        😎 Upload Eyes Images
                    </div>
                    <div>
                        <DropZone props={(files) => setImages(files)} msg={`Upload Images`} />
                    </div>
                    <div className='flex justify-end'>
                        <button className='font-semibold text-xl text-black px-4 py-1 bg-white w-48 rounded-md shadow-md'>
                            Upload
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
