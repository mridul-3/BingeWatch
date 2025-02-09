import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes'
import axios from 'axios'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { store } from './store/store'
import { Provider } from 'react-redux'

const VITE_ACCESS_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2E0M2ZmOWQ4NDJkN2I2MmJlODdhY2NmNGIwMzkyOCIsIm5iZiI6MTczOTA4MzAwMC41NDEsInN1YiI6IjY3YTg0Y2Y4MjI4N2YzYjkxN2M4YjYyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dAByoursdhq-ES7MpoQiHFU1INWskUPMgRK8Pi69kvU"

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

axios.defaults.headers.common['Authorization'] = `Bearer ${VITE_ACCESS_TOKEN}`

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={Router} /> 
  </Provider>
)
 