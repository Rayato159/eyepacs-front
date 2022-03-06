import React from 'react'


export default function NavBar() {
    return (

        <nav className="flex justify-end bg-teal-500 p-4">

        <div className="w-full flex justify-end">
            <div className=" ">
                <a href="/home" className=" text-teal-200 hover:text-white font-medium text-base mr-10">
                    HOME
                </a>

                <a href="/home/upload" className=" text-teal-200 hover:text-white font-medium text-base mr-10">
                    UPLOAD IMAGES
                </a>
                <a href="/" className="text-teal-200 hover:text-white font-medium text-base mr-6">
                    LOGOUT
                </a>
            </div>
        </div>
    </nav>



    )
}
