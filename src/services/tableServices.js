import axios from "axios";

const table1Controller = axios.create({
    baseURL: 'http://localhost:3000/api/table-1'
})

const accessToken = { "Authorization": `Bearer ${localStorage.getItem("accessToken")}` }

export const createTable1 = (eye_photo_id, yes, cannot_grade) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await table1Controller.post(`${eye_photo_id}/create`,{
                yes,
                cannot_grade
            },{
                headers: accessToken
            })
            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}