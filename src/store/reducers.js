import { createSlice } from '@reduxjs/toolkit'

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, ...action.payload]
    },
    swap: (state, action) => {
      state.value = [...action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, swap } = moviesSlice.actions

export default moviesSlice.reducer
