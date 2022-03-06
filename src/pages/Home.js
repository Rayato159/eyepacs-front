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
import { AiOutlineDelete, AiOutlineFileAdd } from 'react-icons/ai'
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
        if (window.confirm('คุณต้องการลบข้อมูลทั้งหมดใช่หรือไม่ ?')) {
            try {
                const res = await deleteEyePhotosAll()
                setDeleteAll(!deleteAll)
            } catch (e) {
                setError(e.message)
            }
        }
    }

    const onDeleteOneHandle = async (eye_photo_id) => {
        if (window.confirm('คุณต้องการลบข้อมูลใช่หรือไม่ ?')) {
            try {
                const res = await deleteEyePhotoOne(eye_photo_id)
                setDeleteOne(!deleteOne)
            } catch (e) {
                setError(e.message)
            }
        }
    }

    // Paginate
    const [pageNumber, setPageNumber] = useState(0)
    const itemsPerPage = 20
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
        } catch (e) {
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

    const displayEyePhotos = eyes
        .slice(pageVisited, pageVisited + itemsPerPage)
        .map((eye, i) => {
            return (
                <tr key={eye.eye_photo_id}>
                    <td className='p-2 text-sm text-center font-medium border border-gray-100 w-20'>{pageVisited + i + 1}</td>
                    <td className='p-2 text-sm text-center font-medium border border-gray-100'>{eye.eye_photo_id}</td>
                    <td className='p-2 text-sm text-center font-medium border border-gray-100 w-48'>{eye.created.match(/.*(?=T)/)[0]}</td>
                    <td className='p-2 text-sm text-center font-medium border border-gray-100 w-36'>
                        <div className={eye.status === 'IN_PROGRESS' ? `bg-yellow-400 px-2 py-1 rounded-md animate-pulse` : `bg-green-400 px-2 py-1 rounded-md`}>
                            {eye.status === 'IN_PROGRESS'? 'PROGRESSING':'DONE'}
                        </div>
                    </td>
                    <td className='p-2 text-sm text-center border border-gray-100 w-36'>
                        <button disabled={eye.status === 'DONE' ? true : false} onClick={() => navigate(`create/${eye.eye_photo_id}`)} className='bg-green-400 hover:bg-green-500 px-2 py-1 rounded-md disabled:bg-gray-400'>
                            <AiOutlineFileAdd className='text-white h-6 w-6' />
                        </button>
                    </td>
                    <td className='p-2 text-sm text-center border border-gray-100 w-36'>
                        <button disabled={eye.status === 'DONE' ? false : true} onClick={() => navigate(`update/${eye.eye_photo_id}`)} className='bg-blue-400 hover:bg-blue-500 px-2 py-1 rounded-md disabled:bg-gray-400'>
                            <MdUpdate className='text-white h-6 w-6' />
                        </button>
                    </td>
                    <td className='p-2 text-sm text-center border border-gray-100 w-36'>
                        <button onClick={() => onDeleteOneHandle(eye.eye_photo_id)} className='bg-red-400 hover:bg-red-500 px-2 py-1 rounded-md'>
                            <AiOutlineDelete className='text-white h-6 w-6' />
                        </button>
                    </td>
                </tr>
            )
        })

    return (
        <div className='w-full'>

            <div className='align-middle inline-block w-full '>
                <div className='shadow-md border-b  border-gray-200 sm:rounded-lg'>
                    <table className='table-auto w-full text-xl divide-y divide-gray-200 '>
                        <thead className='bg-gray-50'>
                            <tr className='bg-trustworthy-300'>
                                <td className='px-6 py-3 text-center text-base font-medium text-black uppercase'>No.</td>
                                <td className='px-6 py-3 text-center text-base font-medium text-black uppercase'>Photo ID</td>
                                <td className='px-6 py-3 text-center text-base font-medium text-black uppercase'>Created</td>
                                <td className='px-6 py-3 text-center text-base font-medium text-black uppercase'>Status</td>
                                <td className='px-6 py-3 text-center text-base font-medium text-black uppercase'>Create</td>
                                <td className='px-6 py-3 text-center text-base font-medium text-black uppercase'>Update</td>
                                <td className='px-6 py-3 text-center text-base font-medium text-black uppercase'>Delete</td>
                            </tr>
                        </thead>
                        <tbody >
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
                    <ReactPaginate className='bottom-0 py-6 flex space-x-6 items-center justify-center text-black text-md font-bold w-full'
                        previousLabel={<IoIosArrowBack className='h-8 w-8 px-2 py-1 bg-teal-400 hover:bg-teal-500 rounded' />}
                        nextLabel={<IoIosArrowForward className='h-8 w-8 px-2 py-1 bg-teal-400 hover:bg-teal-500 rounded' />}
                        pageCount={pageCount}
                        onPageChange={(props) => onPageChange(props)}
                        activeClassName={'text-black border border-black rounded px-3 py-1 bg-trustworthy-200 hover:bg-trustworthy-300'}
                    />
                </div>
            </div>
        </div>
    )
}
