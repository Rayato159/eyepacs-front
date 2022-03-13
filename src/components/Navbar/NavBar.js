import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../features/userSlice'

// Icons
import { AiOutlineSearch } from 'react-icons/ai'

export default function NavBar({ props }) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isToken } = useSelector((state) => state.user)

    useEffect(() => {
        if(!localStorage.getItem("accessToken")) {
            navigate('/')
        }
    }, [isToken])

    return (
        <nav className="flex justify-end bg-teal-500 p-4">
            <div className="w-full flex justify-end">
                <div className="flex items-center">
                    <div className='relative flex justify-end items-center mr-10'>
                        <input onChange={(e) => props(e.target.value)} type="text" className='p-1 px-3 rounded-full focus:outline-none' placeholder='PHOTO ID' />
                        <AiOutlineSearch className='absolute mr-2 h-6 w-6'/>
                    </div>
                    <a href="/home" className=" text-teal-200 hover:text-white font-medium text-base mr-10">
                        HOME
                    </a>

                    <a href="/home/upload" className=" text-teal-200 hover:text-white font-medium text-base mr-10">
                        UPLOAD IMAGES
                    </a>
                    <button onClick={() => dispatch(logout())} className="text-teal-200 hover:text-white font-medium text-base mr-6">
                        LOGOUT
                    </button>
                </div>
            </div>
        </nav>
    )
}
