import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Paginate
import ReactPaginate from 'react-paginate';

// Services
import {
    getEyes,
    deleteEyePhotosAll,
    deleteEyePhotoOne,
} from '../services/eyeServices'

// Icons
import { MdUpdate } from 'react-icons/md'
import { AiOutlineDelete } from 'react-icons/ai'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export const Home = () => {

    const navigate = useNavigate()

    // Eye state
    const [name, setName] = useState("")
    const [eyes, setEyes] = useState([])
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState("")

    // Delete all state
    const [deleteAll, setDeleteAll] = useState(false)

    // Delete one Stat
    const [deleteOne, setDeleteOne] = useState(false)

    const onDeleteAllHandle = async () => {
        if(window.confirm('Are you sure?')) {
            try {
                const res = await deleteEyePhotosAll()
                setDeleteAll(!deleteAll)
            } catch(e) {
                setError(e.message)
            }
        }
    }

    const onDeleteOneHandle = async (eye_photo_id) => {
        if(window.confirm('Are you sure?')) {
            try {
                const res = await deleteEyePhotoOne(eye_photo_id)
                setDeleteOne(!deleteOne)
            } catch(e) {
                setError(e.message)
            }
        }
    }

    // Paginate
    const [pageNumber, setPageNumber] = useState(0)
    const itemsPerPage = 12
    const pageVisited = pageNumber * itemsPerPage
    const pageCount = Math.ceil(eyes.length / itemsPerPage)

    const onPageChange = ({ selected }) => {
        setPageNumber(selected)
    }

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
    }, [deleteAll])

    useEffect(() => {
        fetchEyes(name)
    }, [deleteOne])

    // useEffect(() => {
    //     if(!localStorage.getItem("accessToken")) {
    //         navigate('/')
    //     }
    // }, [])

    const displayEyePhotos = eyes
        .slice(pageVisited, pageVisited + itemsPerPage)
        .map((eye, i) => {
            return (
                <tr key={eye.eye_photo_id}>
                    <td className='p-2 text-md text-center border border-black w-20'>{i+1}</td>
                    <td className='p-2 text-md text-center border border-black'>{eye.eye_photo_id}</td>
                    <td className='p-2 text-md text-center border border-black w-48'>{eye.created.match(/.*(?=T)/)[0]}</td>
                    <td className='p-2 text-md text-center border border-black w-36'>
                        <div className={eye.status === 'IN_PROGRESS'? `bg-yellow-400 px-2 py-1 rounded-md animate-pulse`: `bg-green-400 px-2 py-1 rounded-md`}>
                            {eye.status}
                        </div>
                    </td>
                    <td className='p-2 text-md text-center border border-black w-36'>
                        <button onClick={() => navigate(`update/${eye.eye_photo_id}`)} className='bg-blue-400 hover:bg-blue-500 px-2 py-1 rounded-md'>
                            <MdUpdate className='text-white h-6 w-6'/>
                        </button>
                    </td>
                    <td className='p-2 text-md text-center border border-black w-36'>
                        <button onClick={() => onDeleteOneHandle(eye.eye_photo_id)} className='bg-red-400 hover:bg-red-500 px-2 py-1 rounded-md'>
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
                        <td className='p-3 border border-black font-bold text-center'>No.</td>
                        <td className='p-3 border border-black font-bold text-center'>Photo ID</td>
                        <td className='p-3 border border-black font-bold text-center'>Created</td>
                        <td className='p-3 border border-black font-bold text-center'>Status</td>
                        <td className='p-3 border border-black font-bold text-center'>Update</td>
                        <td className='p-3 border border-black font-bold text-center'>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {displayEyePhotos}
                </tbody>
            </table>
            {eyes.length > 0 &&
                <div className='w-full flex justify-end py-6 px-7'>
                    <button onClick={() => onDeleteAllHandle()} className='bg-red-400 hover:bg-red-500 px-4 py-2 text-white rounded-md'>
                        Delete All
                    </button>
                </div>
            }
            <ReactPaginate className='fixed bottom-0 py-6 flex space-x-6 items-center justify-center text-black text-md font-bold w-full'
                previousLabel={<IoIosArrowBack className='h-8 w-8 px-2 py-1 bg-teal-400 hover:bg-teal-500 rounded'/>}
                nextLabel={<IoIosArrowForward className='h-8 w-8 px-2 py-1 bg-teal-400 hover:bg-teal-500 rounded'/>}
                pageCount={pageCount}
                onPageChange={(props) => onPageChange(props)}
                activeClassName={'text-black border border-black rounded px-3 py-1 bg-trustworthy-200 hover:bg-trustworthy-300'}
            />
        </div>
    )
}
