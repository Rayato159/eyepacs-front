import axios from "axios";

const eyesController = axios.create({
    baseURL: 'http://localhost:3000/api/eye-photos'
})

const accessToken = { "Authorization": `Bearer ${localStorage.getItem("accessToken")}` }

export const getEyes = (name) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await eyesController.get(`?name=${name? name: ''}`)
            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}

export const deleteEyePhotosAll = () => {
    return new Promise(async (resolve, reject) => {
        console.log('test')
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