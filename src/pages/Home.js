import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/Navbar/NavBar';

// Paginate
import ReactPaginate from 'react-paginate';

// Services
import {
    getEyes,
    deleteEyePhotosAll,
    deleteEyePhotoOne,
    exportEyeData,
} from '../services/eyeServices'

// Icons
import { MdUpdate } from 'react-icons/md'
import { AiOutlineDelete, AiOutlineFileAdd, AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti'

export const Home = () => {

    const navigate = useNavigate()

    // Eye state
    const [name, setName] = useState("")
    const [status, setStatus] = useState("")
    const [statusSort, setStatusSort] = useState("DESC")
    const [dateSort, setDateSort] = useState("DESC")
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

    const onExportHandle = async () => {
        try {
            const res = await exportEyeData()
        } catch (e) {
            setError(e.message)
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

    const fetchEyes = async (
        name,
        status,
        statusSort,
        dateSort,
    ) => {
        setIsPending(true)
        try {
            const res = await getEyes(
                name,
                status,
                statusSort,
                dateSort,
            )
            setEyes(res)
            setIsPending(false)
        } catch (e) {
            setError(e.message)
            setIsPending(false)
        }
    }

    useEffect(() => {
        fetchEyes(
            name,
            status,
            statusSort,
            dateSort,
        )
    }, [deleteAll])

    useEffect(() => {
        fetchEyes(
            name,
            status,
            statusSort,
            dateSort,
        )
    }, [dateSort])

    useEffect(() => {
        fetchEyes(
            name,
            status,
            statusSort,
            dateSort,
        )
    }, [statusSort])

    useEffect(() => {
        fetchEyes(
            name,
            status,
            statusSort,
            dateSort,
        )
    }, [name])

    useEffect(() => {
        fetchEyes(
            name,
            status,
            statusSort,
            dateSort,
        )
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
                            {eye.status === 'IN_PROGRESS' ? 'PROGRESSING' : 'DONE'}
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
            <div>
                <NavBar/>
            </div>

            <div className='align-middle inline-block w-full '>
                <div className='shadow-md border-b  border-gray-200 sm:rounded-lg'>
                    <table className='table-auto w-full text-xl divide-y divide-gray-200 '>
                        <thead className='bg-gray-50'>
                            <tr className='bg-trustworthy-300'>
                                <td className='px-6 py-3 text-center text-base font-medium text-black uppercase'>No.</td>
                                <td className='px-6 py-3 text-center text-base font-medium text-black uppercase'>
                                    <form className='flex justify-center items-center space-x-2'>
                                        <div>
                                            PHOTO ID
                                        </div>
                                        <div className='relative flex justify-end items-center'>
                                            <input onChange={(e) => setName(e.target.value)} type="text" className='p-1 px-3 rounded-full focus:outline-none'/>
                                            <AiOutlineSearch className='absolute mr-2 h-6 w-6 bg-white'/>
                                        </div>
                                    </form>
                                </td>
                                <td className='px-6 py-3 text-center text-base font-medium text-black uppercase'>
                                    <div className='flex justify-center items-center space-x-2'>
                                        <div>
                                            Created
                                        </div>
                                        <button>
                                            {dateSort === 'DESC'?
                                                <TiArrowSortedDown onClick={() => setDateSort("ASC")} className='h-5 w-5'/>
                                                :
                                                <TiArrowSortedUp onClick={() => setDateSort("DESC")} className='h-5 w-5'/>
                                            }
                                        </button>
                                    </div>
                                </td>
                                <td className='px-6 py-3 text-center text-base font-medium text-black uppercase'>
                                    <div className='flex justify-center items-center space-x-2'>
                                        <div>
                                            Status
                                        </div>
                                        <button>
                                            {statusSort === 'DESC'?
                                                <TiArrowSortedDown onClick={() => setStatusSort("ASC")} className='h-5 w-5'/>
                                                :
                                                <TiArrowSortedUp onClick={() => setStatusSort("DESC")} className='h-5 w-5'/>
                                            }
                                        </button>
                                    </div>
                                </td>
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
                    
                        <div className='w-full flex space-x-4 justify-end py-6 px-7'>
                            <button onClick={() => onExportHandle()} className='bg-green-400 hover:bg-green-500 px-4 py-2 text-white rounded-md'>
                                Download to CSV
                            </button>
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
