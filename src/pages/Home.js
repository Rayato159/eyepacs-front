import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Services
import { getEyes } from '../services/eyeServices'

// Icons
import { MdUpdate } from 'react-icons/md'
import { AiOutlineDelete } from 'react-icons/ai'

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

    useEffect(() => {
        if(!localStorage.getItem("accessToken")) {
            navigate('/')
        }
    }, [])

    const displayEyePhotos = eyes
        .slice(0, 10)
        .map((eye, i) => {
            return (
                <tr key={eye.eye_photo_id}>
                    <td className='p-2 text-md text-center border border-black w-20'>{i+1}</td>
                    <td className='p-2 text-md text-center border border-black'>{eye.eye_photo_id}</td>
                    <td className='p-2 text-md text-center border border-black w-36'>
                        <div className={eye.status === 'IN_PROGRESS'? `bg-yellow-400 px-2 py-1 rounded-md animate-pulse`: `bg-green-400 px-2 py-1 rounded-md`}>
                            {eye.status}
                        </div>
                    </td>
                    <td className='p-2 text-md text-center border border-black w-36'>
                        <button className='bg-blue-400 hover:bg-blue-500 px-2 py-1 rounded-md'>
                            <MdUpdate className='text-white h-6 w-6'/>
                        </button>
                    </td>
                    <td className='p-2 text-md text-center border border-black w-36'>
                        <button className='bg-red-400 hover:bg-red-500 px-2 py-1 rounded-md'>
                            <AiOutlineDelete className='text-white h-6 w-6'/>
                        </button>
                    </td>
                </tr>
            )
        })

    return (
        <div className='w-full'>
            <table className='table-auto w-full text-xl'>
                <thead>
                    <tr className='bg-trustworthy-300'>
                        <td className='p-3 border border-black text-center'>No.</td>
                        <td className='p-3 border border-black text-center'>Photo ID</td>
                        <td className='p-3 border border-black text-center'>Status</td>
                        <td className='p-3 border border-black text-center'>Update</td>
                        <td className='p-3 border border-black text-center'>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {displayEyePhotos}
                </tbody>
            </table>
        </div>
    )
}
