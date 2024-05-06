import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from "@/app/store/reducers";

export default configureStore({
  reducer: {
    movies: moviesReducer,
  },
})
