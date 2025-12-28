import React from 'react'
import { Link } from 'react-router-dom'
import MovieText from '../../components/MovieText'

const MainPage = () => {
  return (
    <>

      <div className='main h-screen w-screen bg-black flex justify-center items-center gap-10 sm:gap-10 px-10 flex-col overflow-hidden'>
        <h1 className='movie text-white text-5xl sm:text-6xl lg:text-9xl font-extrabold font-sans '>Movie App</h1>
      
        <div className="buttons flex flex-col sm:flex-row sm:gap-10 w-50 sm:w-fit p-10 gap-5 text-5xl text-white">
          <Link 
          className=' text-xl active:scale-90 button 
          font-medium bg-gray-600 hover:text-blue-500 
           rounded-2xl' 
          to="/login">Login</Link>
          <Link 
          className=' text-xl active:scale-90 button 
          font-medium bg-gray-600 hover:text-blue-500 
           rounded-2xl' 
          to="/signUp">Sign Up</Link>
          <Link 
          className=' text-xl active:scale-90 button 
          font-medium bg-gray-600 hover:text-blue-500 
           rounded-2xl' 
          to="/demo">Demo</Link>
          
        </div>

      </div>

    </>
  )
}

export default MainPage
