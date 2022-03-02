import axios from "axios";

// Controller
const table1Controller = axios.create({
    baseURL: 'http://localhost:3000/api/table-1'
})

const table2Controller = axios.create({
    baseURL: 'http://localhost:3000/api/table-2'
})

const table3Controller = axios.create({
    baseURL: 'http://localhost:3000/api/table-3'
})

const table4Controller = axios.create({
    baseURL: 'http://localhost:3000/api/table-4'
})

const table5Controller = axios.create({
    baseURL: 'http://localhost:3000/api/table-5'
})

const table6Controller = axios.create({
    baseURL: 'http://localhost:3000/api/table-6'
})

const table7Controller = axios.create({
    baseURL: 'http://localhost:3000/api/table-7'
})

const table8Controller = axios.create({
    baseURL: 'http://localhost:3000/api/table-8'
})

const table9Controller = axios.create({
    baseURL: 'http://localhost:3000/api/table-9'
})

const table10Controller = axios.create({
    baseURL: 'http://localhost:3000/api/table-10'
})

const table11Controller = axios.create({
    baseURL: 'http://localhost:3000/api/table-11'
})

const table12Controller = axios.create({
    baseURL: 'http://localhost:3000/api/table-12'
})

const table13Controller = axios.create({
    baseURL: 'http://localhost:3000/api/table-13'
})


// Token
const accessToken = { "Authorization": `Bearer ${localStorage.getItem("accessToken")}` }

// Table 1
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

// Table 2
export const createTable2 = (eye_photo_id, yes, cannot_grade) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await table2Controller.post(`${eye_photo_id}/create`,{
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

// Table 3
export const createTable3 = (eye_photo_id, yes, cannot_grade) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await table3Controller.post(`${eye_photo_id}/create`,{
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

// Table 4
export const createTable4 = (eye_photo_id, lower_2a, upper_2a, cannot_grade) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await table4Controller.post(`${eye_photo_id}/create`,{
                lower_2a,
                upper_2a,
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

// Table 5
export const createTable5 = (eye_photo_id, yes, cannot_grade) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await table5Controller.post(`${eye_photo_id}/create`,{
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

// Table 6
export const createTable6 = (eye_photo_id, lower_8a, upper_8a, cannot_grade) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await table6Controller.post(`${eye_photo_id}/create`,{
                lower_8a,
                upper_8a,
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

// Table 7
export const createTable7 = (eye_photo_id, yes, cannot_grade) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await table7Controller.post(`${eye_photo_id}/create`,{
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

// Table 8
export const createTable8 = (eye_photo_id, yes, cannot_grade) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await table8Controller.post(`${eye_photo_id}/create`,{
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

// Table 9
export const createTable9 = (eye_photo_id, yes, cannot_grade) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await table9Controller.post(`${eye_photo_id}/create`,{
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


// Table 10
export const createTable10 = (eye_photo_id, yes, cannot_grade) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await table10Controller.post(`${eye_photo_id}/create`,{
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

// Table 11
export const createTable11 = (eye_photo_id, yes, cannot_grade) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await table11Controller.post(`${eye_photo_id}/create`,{
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

// Table 12
export const createTable12 = (eye_photo_id, lower_2DD, upper_1DD, cannot_grade) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await table12Controller.post(`${eye_photo_id}/create`,{
                lower_2DD,
                upper_1DD,
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

// Table 13
export const createTable13 = (
    eye_photo_id,
    number,
) => {
    // Varible 1 - 5
    let cataract = false
    let glaucoma = false
    let occlusion = false
    let maculopathy = false
    let other = false

    // Check which one is true!!!
    switch(number) {
        case 1:
            cataract = true
            break
        case 2:
            glaucoma = true
            break
        case 3:
            occlusion = true
            break
        case 4:
            maculopathy = true
            break;
        case 5:
            other = true
            break
    }

    let items = {
        cataract,
        glaucoma,
        occlusion,
        maculopathy,
        other
    }

    return new Promise(async (resolve, reject) => {
        try {
            const res = await table13Controller.post(`${eye_photo_id}/create`,
                items,
                { headers: accessToken },
            )
            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}