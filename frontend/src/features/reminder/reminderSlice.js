import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import reminderService from "./reminderService";

const initialState = {
    reminder: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// create new homework
export const postReminder = createAsyncThunk(
    'reminder/post',
    async (queryData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await reminderService.postreminder(queryData, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const ReminderSlice = createSlice({
    name: "reminder",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(postReminder.pending, (state) => {
                state.isLoading = true
            })
            .addCase(postReminder.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.query.push(action.payload)
            })
            .addCase(postReminder.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = ReminderSlice.actions
export default ReminderSlice.reducer