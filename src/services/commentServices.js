import axios from "axios";

const commentsController = axios.create({
    baseURL: 'http://localhost:3000/api/comments'
})

const accessToken = { "Authorization": `Bearer ${localStorage.getItem("accessToken")}` }

export const createComment = (eye_photo_id, description) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await commentsController.post(`${eye_photo_id}/create`,{
                description: description? description:"none",
            },{
                headers: accessToken
            })
            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}

export const getComment = (eye_photo_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await commentsController.get(`${eye_photo_id}/get`)
            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}

export const updateComment = (eye_photo_id, description) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await commentsController.patch(`${eye_photo_id}/update`,{
                description
            },{
                headers: accessToken
            })
            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}