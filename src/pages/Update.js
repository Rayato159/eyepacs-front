import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const Update = () => {
    // Get params
    let { eye_photo_id } = useParams()

    return (
        <div className='text-black'>
            {eye_photo_id}
        </div>
    )
}
