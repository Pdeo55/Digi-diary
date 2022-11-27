import axios from "axios";

const API_URL = "http://localhost:8000/api/reminders"

const postreminder = async (reminderData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL + '/add', reminderData, config)

    return response.data
}

const reminderService = {
    postreminder
}

export default reminderService