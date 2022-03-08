import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

// Icons
import { BsImages } from 'react-icons/bs'

export const DropZone = ({ props, msg }) => {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: 'image/jpeg, image/png, image/jpg, image/gif, image/tiff'
  })
  
  useEffect(() => {
    props(acceptedFiles)
  }, [acceptedFiles])

  return (
    <section className="flex flex-col space-y-2 pb-2">
      {msg? <label className='font-semibold text-xl mb-3'>{msg}</label>: null}
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <div
            className={
                acceptedFiles.length > 0?
                'flex flex-col items-center space-y-3 rounded-md p-16 text-black bg-gray-200 duration-300'
                :'flex flex-col items-center space-y-3 rounded-md p-16 text-gray-600 bg-white hover:bg-gray-200 hover:text-black duration-300'
            }
        >
            <BsImages className='h-10 w-10 text-black'/>
            <div className='text-md text-center'>
                Drop some images here, or click to select images
            </div>
            {acceptedFiles.length > 0 &&
                <div className='text-sm text-center'>
                    Number of images : {acceptedFiles.length}
                </div>
            }
        </div>
      </div>
    </section>
  );
}