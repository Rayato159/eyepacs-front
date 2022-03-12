import axios from "axios";

const userController = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`
})

export const login = async (username, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await userController.post('login', {
                username,
                password
            })
            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}