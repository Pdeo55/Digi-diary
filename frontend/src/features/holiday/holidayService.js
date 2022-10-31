import axios from "axios";

const API_URL = "http://localhost:8000/api/holidays"

const getAllHoliday = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL+'/get', config)

    return response.data
}




const createHoliday = async (holidayData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL+'/add', holidayData, config)

    return response.data
}

// const deleteholiday = async (holidayId, token) => {
//     const config = {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     }

//     const response = await axios.delete(API_URL+'/delete'+`/${holidayId}`, config)

//     return response.data
// }

const holidayService = {
    createHoliday, 
    getAllHoliday, 
   
    // deleteholiday
}

export default holidayService