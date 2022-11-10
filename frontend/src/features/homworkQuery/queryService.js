import axios from "axios";

const API_URL = "http://localhost:8000/api/homework"

const postQuery = async (queryData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL + '/QuestionQuery', queryData, config)

    return response.data
}

const queryService = {
    postQuery
}

export default queryService