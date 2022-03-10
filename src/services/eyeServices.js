import axios from "axios";

const eyesController = axios.create({
    baseURL: 'http://localhost:3000/api/eye-photos'
})

const accessToken = { "Authorization": `Bearer ${localStorage.getItem("accessToken")}` }

export const getEyes = (name, status, status_sort, date_sort) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await eyesController.get(`?name=${name? name: ''}${status_sort?  `&status_sort=${status_sort}`:''}${date_sort? `&date_sort=${date_sort}`:''}${status? `&status=${status}`:''}`)
            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}

export const getEyePhotoById = (eye_photo_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await eyesController.get(`${eye_photo_id}`)
            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}

export const updateEyeSide = (eye_photo_id, eyeside) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await eyesController.patch(`${eye_photo_id}/update/eyeside`,
                { eyeside },
                { headers: accessToken },
            )
            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}

export const updateEyeStatus = (eye_photo_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await eyesController.patch(`${eye_photo_id}/update/status`, 
                { status: 'DONE' },
                { headers: accessToken },
            )
            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}

// Images upload
export const uploadEyePhotos = (images) => {

    let formData = new FormData()
    for(let i=0; i<images.length; i++) {
        formData.append('images', images[i])
    }

    return new Promise(async (resolve, reject) => {
        try {
            const res = await eyesController.post(`uploads`,  
                formData,
                { headers: accessToken }
            )
            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}

export const deleteEyePhotoOne = (eye_photo_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await eyesController.delete(`${eye_photo_id}/delete`, {
                headers: accessToken
            })
            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}

export const exportEyeData = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.get('http://localhost:3000/api/eye-data')
            window.open('http://localhost:3000/api/eye-data')
            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}

export const deleteEyePhotosAll = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await eyesController.delete(`delete-all`, {
                headers: accessToken
            })
            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}