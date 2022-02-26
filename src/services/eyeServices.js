import axios from "axios";

const eyesController = axios.create({
    baseURL: 'http://localhost:3000/api/eye-photos'
})

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