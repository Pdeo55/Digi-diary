import axios from "axios";

const API_URL = "http://localhost:8000/api/homework"

const getAllHomework = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL+'/get', config)

    return response.data
}

const getHomeworkByGrade = async (studentId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL+'/get'+`/${studentId}`, config)

    return response.data
}

const createHomework = async (homeworkData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL+'/add', homeworkData, config)

    return response.data
}

const homeworkService = {
    createHomework, 
    getAllHomework, 
    getHomeworkByGrade
}

export default homeworkService