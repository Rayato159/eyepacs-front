import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../features/userSlice'

// Icons
import { BiMenu } from 'react-icons/bi'
import { BiLogOut } from 'react-icons/bi'

export const Sidebar = () => {

    const navigate = useNavigate()

    const [isShowToggle, setIsShowToggle] = useState(false)

    const dispatch = useDispatch()
    const { isToken } = useSelector((state) => state.user)

    useEffect(() => {
        if(!localStorage.getItem("accessToken")) {
            navigate('/')
        }
    }, [isToken])

    if(isShowToggle) {
        return (
            // Full menu
            <nav className='sticky min-h-screen w-64 bg-trustworthy-400 duration-300'>
                <div className='flex flex-col justify-between min-h-screen'>
                    {/* Top */}
                    <div className='flex items-center justify-between p-3'>
                        <div className='font-semibold text-xl text-black truncate'>
                            EyePACS
                        </div>
                        <button onClick={() => setIsShowToggle(!isShowToggle)}>
                            <BiMenu className='text-black h-6 w-6'/>
                        </button>
                    </div>
    
                    {/* Mid */}
                    <div className='flex flex-col space-y-3'>
                        <div className='p-3 text-xl truncate'>
                            การแสดงผล
                        </div>
                    </div>
    
                    {/* Bottom */}
                    <div className='w-full'>
                        {isToken &&
                            <button onClick={() => dispatch(logout())} className='flex items-center w-full justify-between hover:bg-trustworthy-500 p-3'>
                                <div className='font-semibold text-xl text-black truncate'>
                                    Logout
                                </div>
                                <div>
                                    <BiLogOut className='w-6 h-6'/>
                                </div>
                            </button>
                        }
                    </div>
                </div>
            </nav>
        )
    } else {
        return (
            // Full menu
            <nav className='sticky min-h-screen w-14 bg-trustworthy-400 duration-300'>
                <div className='flex flex-col justify-between items-center min-h-screen'>
                    {/* Top */}
                    <button onClick={() => setIsShowToggle(!isShowToggle)} className='py-3'>
                        <BiMenu className='text-black h-6 w-6'/>
                    </button>
    
                    {/* Mid */}
                    <div className='flex flex-col space-y-3'>
    
                    </div>
    
                    {/* Bottom */}
                    <div className='w-full'>
                        {isToken &&
                            <button onClick={() => dispatch(logout())} className='flex w-full justify-center hover:bg-trustworthy-500 py-3'>
                            <BiLogOut className='w-6 h-6'/>
                            </button>
                        }
                    </div>
                </div>
            </nav>
        )
    }
}
