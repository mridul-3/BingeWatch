import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setBannerData , setImageURL} from './store/bingeWatch'

function App() {

  const dispatch = useDispatch()
  
  const fetchTrendingData = async()=>{
    try{
      const response = await axios.get('/trending/all/week')

      dispatch(setBannerData(response.data.results))

      console.log('response',response )
    }catch(error){
      console.log("error", error)
    }
  }

  const fetchConfiguration = async()=>{
    try{
      const response = await axios.get("/configuration")
      dispatch(setImageURL(response.data.images.secure_base_url+"original"))
    }catch(error){

    }
  }
  useEffect(()=>{
    fetchTrendingData()
    fetchConfiguration()
  }, [])


  return (
    <main>
      <Header/>
      <div className='pt-16'>
      <Outlet/>
      </div>
      <Footer/>
    </main>
  )
}

export default App