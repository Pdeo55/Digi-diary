import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import homeworkService from "./homeworkService";

const initialState = {
    homeworks: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// create new homework
export const createHomework = createAsyncThunk(
    'homeworks/create',
    async (homeworkData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await homeworkService.createHomework(homeworkData, token)
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

// get all homework
export const getAllHomework = createAsyncThunk(
    'homeworks/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await homeworkService.getAllHomework(token)
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

// get homework by grade
export const getHomeworkByGrade = createAsyncThunk(
    'homeworks/getByGrade',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await homeworkService.getHomeworkByGrade(id, token)
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

export const getHomeworkByTeacher = createAsyncThunk(
    'homeworks/getByTeacher',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await homeworkService.getHomeworkByTeacher(id, token)
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

export const deleteHomework = createAsyncThunk(
    'homeworks/deleteHomework',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await homeworkService.deleteHomework(id, token)
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

export const homeworkSlice = createSlice({
    name: "homework",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createHomework.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createHomework.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.homeworks.push(action.payload)
            })
            .addCase(createHomework.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getAllHomework.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllHomework.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.homeworks = action.payload
            })
            .addCase(getAllHomework.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getHomeworkByGrade.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getHomeworkByGrade.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.homeworks = action.payload

            })
            .addCase(getHomeworkByGrade.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getHomeworkByTeacher.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getHomeworkByTeacher.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.homeworks = action.payload

            })
            .addCase(getHomeworkByTeacher.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteHomework.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteHomework.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.homeworks = state.homeworks.filter((homework) => (homework._id !== action.payload.id))
            })
            .addCase(deleteHomework.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = homeworkSlice.actions
export default homeworkSlice.reducer