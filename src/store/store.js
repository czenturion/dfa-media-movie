import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from "@/src/store/reducers";

export default configureStore({
  reducer: {
    movies: moviesReducer,
  },
})
