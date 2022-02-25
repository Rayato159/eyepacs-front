import React, { useEffect, useState } from 'react'

// React router dom
import { useNavigate } from 'react-router-dom'

// API
import { login } from '../services/userServices'  

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { loginSuccess, loginFail, loginPending } from '../features/userSlice'

// Icons
import { BiErrorCircle } from 'react-icons/bi'
import { CgSpinner } from 'react-icons/cg'

export const Login = () => {

    // Navigate
    const navigate = useNavigate()

    // Login state
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // Redux state
    const dispatch = useDispatch()
    const [
        {
            isLoginPending,
            isLoginError,
            isToken,
        },
    ] = useSelector((state) => [
        state.user,
    ])

    // Submit function
    const onSubmitHandle = async (e) => {
        e.preventDefault()

        dispatch(loginPending())
        try {
            const res = await login(username, password)
            dispatch(loginSuccess(res))
        } catch(e) {
            dispatch(loginFail(e.message))
        }
    }

    useEffect(() => {
        if(isToken) {
            navigate('/home')
        }
    }, [isToken])

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='w-96 h-auto'>
                <div className='flex flex-col space-y-8 shadow-xl p-8 rounded-xl bg-white border border-gray-300'>
                    <div className='text-4xl font-bold'>
                        Login
                    </div>
                    <form onSubmit={onSubmitHandle} className='flex flex-col space-y-12 w-full'>

                        {/* Form input */}
                        <div className='flex flex-col space-y-3'>
                            {/* Username */}
                            <div className='flex flex-col space-y-2'>
                                <label className='font-bold text-xl'>Username</label>
                                <input onChange={(e) => setUsername(e.target.value)} className='p-3 border border-gray-400 rounded-full focus:outline-trustworthy-400' placeholder='Username' type="text" />
                            </div>
                            {/* Password */}
                            <div className='flex flex-col space-y-2'>
                                <label className='font-bold text-xl'>Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} className='p-3 border border-gray-400 rounded-full focus:outline-trustworthy-400' placeholder='Password' type="password" />
                            </div>
                            {/* Error */}
                            {isLoginError && 
                                <div className='flex items-center space-x-2 text-sm text-red-500'>
                                    <div>
                                        <BiErrorCircle className='h-4 w-4' />
                                    </div>
                                    <div>
                                        {isLoginError}
                                    </div>
                                </div>
                            }
                        </div>

                        {/* Button */}
                        {isLoginPending?
                            <button type='submit' className='bg-trustworthy-400 hover:bg-trustworthy-500 py-2 rounded-full'>
                                <div className='flex space-x-2 items-center justify-center'>
                                    <div>
                                        <CgSpinner className='h-7 w-7 text-white animate-spin'/>
                                    </div>
                                    <div className='font-bold text-2xl text-white'>
                                        Pending...
                                    </div>
                                </div>
                            </button>
                            :
                            <button type='submit' className='bg-trustworthy-400 hover:bg-trustworthy-500 py-2 rounded-full'>
                                <div className='font-bold text-2xl text-white'>
                                    Login
                                </div>
                            </button>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}