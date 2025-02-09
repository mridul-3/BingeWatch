import { configureStore } from '@reduxjs/toolkit'
import bingeWatchReducer from './bingeWatch'

export const store = configureStore({
  reducer: {
    movieData: bingeWatchReducer
  },
})