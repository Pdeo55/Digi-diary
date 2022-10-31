import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import holidayService from "./holidayService";

const initialState = {
    holidays: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// create new holiday
export const createHoliday = createAsyncThunk(
    'holidays/create',
    async (holidayData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await holidayService.createHoliday(holidayData, token)
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

// get all holiday
export const getAllHoliday = createAsyncThunk(
    'holidays/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await holidayService.getAllHoliday(token)
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





// export const deleteholiday = createAsyncThunk(
//     'holidays/deleteholiday',
//     async (id, thunkAPI) => {
//         try {
//             const token = thunkAPI.getState().auth.user.token
//             return await holidayService.deleteholiday(id, token)
//         } catch (error) {
//             const message =
//                 (error.response &&
//                     error.response.data &&
//                     error.response.data.message) ||
//                 error.message ||
//                 error.toString()
//             return thunkAPI.rejectWithValue(message)
//         }
//     }
// )

export const holidaySlice = createSlice({
    name: "holiday",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createHoliday.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createHoliday.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.holidays.push(action.payload)
            })
            .addCase(createHoliday.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getAllHoliday.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllHoliday.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.holidays = action.payload
            })
            .addCase(getAllHoliday.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            
            // .addCase(deleteholiday.pending, (state) => {
            //     state.isLoading = true
            // })
            // .addCase(deleteholiday.fulfilled, (state, action) => {
            //     state.isLoading = false
            //     state.isSuccess = true
            //     state.holidays = state.holidays.filter((holiday) => (holiday._id !== action.payload.id))
            // })
            // .addCase(deleteholiday.rejected, (state, action) => {
            //     state.isLoading = false
            //     state.isError = true
            //     state.message = action.payload
            // })
    }
})

export const { reset } = holidaySlice.actions
export default holidaySlice.reducer