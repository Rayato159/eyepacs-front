import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export const EyePhoto = ({ props }) => {
    return (
        <Zoom>
            <img
                src={props}
                width="800"
            />
        </Zoom>
    )
}