import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import queryService from "./queryService";

const initialState = {
    query: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// create new homework
export const postQuery = createAsyncThunk(
    'query/post',
    async (queryData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await queryService.postQuery(queryData, token)
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

export const homeworkQuerySlice = createSlice({
    name: "query",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(postQuery.pending, (state) => {
                state.isLoading = true
            })
            .addCase(postQuery.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.query.push(action.payload)
            })
            .addCase(postQuery.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = homeworkQuerySlice.actions
export default homeworkQuerySlice.reducer