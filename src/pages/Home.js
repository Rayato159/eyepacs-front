import React from 'react'

// Components
import { Sidebar } from '../components/Sidebar/Sidebar'

export const Home = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div>
                Content
            </div>
        </div>
    )
}
